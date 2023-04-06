import React from "react";
import PropTypes from "prop-types";

// Movie에는 동적 데이터가 필요 없으므로 state도 필요 없음. 그래서 함수형 컴포넌트로 작성할 것

function Movie({id,title,year,summary,poster} ) {
    return (
        <div>
            <h4>{title}</h4>
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
};
// poster props는 영화 포스트 이미지 주소를 저장하기 위함

export default Movie;