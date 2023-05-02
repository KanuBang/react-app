import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css"


class Home extends React.Component {
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
      <section className="container">
        {isLoading ? (
          <div className="loader">
              <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie 
                key = {movie.id}
                id = {movie.id}
                year = {movie.year}
                title = {movie.title}
                summary = {movie.summary}
                poster = {movie.medium_cover_image}
                genres = {movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    )
  }

/* Concept
1. JSX className = HTML Class
2. genres: PropTypes.arrayOf(PropTypes.string).isRequired => genres는 문자열 배열이며 꼭 필요하다
*/
}

export default Home;
