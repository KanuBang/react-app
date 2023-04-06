import React from "react";
import PropTypes from "prop-types"


function Food({name, pic, rating}) {
  // {fav} = props; {fav}
  // props.fav
  return (
    // div로 묶어서 리턴한다. h1, img 따로 리턴하는 게 아니라
    <div>
      <h1>Best Player: {name}</h1>
      <h4>rating: {rating}</h4>
      {/*alt 속성은 이미지가 로드되지 못한 경우 대신 표시될 텍스트를 제공 */}
      <img src={pic} alt={name}></img>
    </div>
  )
}
 
// map 함수는 배열의 모든 원소마다 특정 작업을 하는 함수를 적용하고
// 그 함수가 반환한 결과를 모아서 배열로 반환한다.
const players = [
  /*id 부여: 컴포넌트가 서로 다르다는 걸 알리기 위하여 */
  {
    id: 1,
    name:"Theo Hernandez",
    image: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt03ab16d69a741aa0/60db07560bc1b20fa6b6e295/9e3231059b9d40c4194744dab2b5936b1b35816f.jpg',
    rating: 5,
  },
  {
    id: 2,
    name:"Phil Foden",
    image:'https://e0.365dm.com/21/04/2048x1152/skysports-phil-foden-manchester-city_5343992.jpg',
    rating: 4.9
  },
  {
    id: 3,
    name:"Rodrigo",
    image:"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt497e050c56cd823b/61c82cc15d616f4311468f4b/Rodri_Man_City_UCL_2021-22.jpg",
    rating: 2.8
  },
  {
    id: 4,
    name:"Rafael leao",
    image:"https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt93fc37f9aeeab515/61ea94bf1ed54f3c3403cce6/leao-hands.jpg",
    rating: 3.9
  }
];

//prop-types는 컴포넌트가 전달 받은 props가 정말 내가 원하는 값인지 확인해 준다.

function App() {
  
  return (
    <div>
      {players.map(player => (
         <Food rating = {player.rating} key ={player.id} name = {player.name} pic = {player.image} />
      ))}
    </div>
    
  ); 
}

// 대문자 P 아니고 소문자임
// Food 컴포넌트의 props 이름과 일치해야 함
// isRequired는 필수라는 뜻이다. 즉, 그 props가 필수적인 항목이 된다.
Food.propTypes = {
  name: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  rating: PropTypes.number
}
export default App;
