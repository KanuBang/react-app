import React from "react";
import axios from "axios";
import Movie from "./Movie";

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
    return <div>{isLoading ? "Loading..." : movies.map((movie) => {
      console.log(movie)
      return (
        <Movie
          id={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
        />
      )
    })} </div>;
  }

/* Flow
1. render 함수 실행
2. isLoading = true -> "Loading..."
3. render 끝
4. componentDidMount 실행
5. this.getMovies() 실행
6. api 끌어와서 promise 객체 movies에 저장
7. setState로 동적 데이터 업데이트
8. 동적 데이터가 업데이트 되었기 때문에 rerender
9. render 함수 실행
10. isLoading = true -> movies.map 실행
11. map 함수의 콜백 함수 실행
12. Movie 컴포넌트에 props 전달
13. Movie 컴포넌트에서 <div><h4>{title}</h4></div> 리턴
14. 콜백함수가 13번 결과값을 리턴
15. 그 결과값을 렌더링
*/
}

export default App;
