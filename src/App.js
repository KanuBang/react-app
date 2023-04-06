import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css"

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async ( ) => {
    const {
      data: {
        data: {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    //sort_by=rating
    this.setState({movies, isLoading: false})
   
  }
  // 컴포넌트가 그려지면(render) 호출되는 생명주기 함수 
  componentDidMount( ) {
    //영화 데이터 로딩
    this.getMovies()
  }

  render( ) {
    const {isLoading, movies} = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
              <span class="loader__text">Loading...</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map(movie => (
              <Movie 
                key = {movie.id}
                id = {movie.id}
                year = {movie.year}
                title = {movie.title}
                summary = {movie.summary}
                poster = {movie.medium_cover_image}
              />
            ))}
          </div>
        )}
      </section>
    )
  }

/* Flow
1. render 실행
2. 로딩
3. render 실행 종료 후 componentDidMount 실행
4. this.getMovies() 실행
5. api를 이용하여 movies에 영화 data 담기
6. setState로 state 업데이트
7. rerender
8. isLoading이 flase 이므로 movies.map 실행
9. movies 객체 배열을 순회하며 순차적으로 Movie 컴포넌트에 props 값 전달
10. Movie가 값을 리턴
11. movies의 마지막 까지 콜백 함수 실행
12. 최종 결과 렌더링

*/
}

export default App;
