import React from "react";
import PropTypes from "prop-types";

// Movie에는 동적 데이터가 필요 없으므로 state도 필요 없음. 그래서 함수형 컴포넌트로 작성할 것

function Movie({id,title,year,summary,poster, genres} ) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genre, index) => {
                        return (
                            <li key={index} className="movie__genre">
                                {genre}
                            </li>
                        )
                    })}
                </ul>
                <p className="movie__summary">{summary.slice(0, 180)}...</p>
            </div>
        </div>
    )
}

// Movie에 넘어와야 하는 영화 데이터를 정의하고 관리하기 위해 prop-types를 사용함
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};
//genres는 문자열 배열이며, 반드시 필요하다.
/* genres Flow
genres data를 순회 하면서 하나 하나 가져와 li에 넣는다.
그리고 이 작업을 마지막 element까지 수행하고 최종적으로 ul에 들어간다.
*/
export default Movie;