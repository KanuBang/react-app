import React from "react";
import PropTypes from "prop-types"


function Food({name, pic, rating}) {

  return (

    <div>
      <h1>Best Player: {name}</h1>
      <h4>rating: {rating}</h4>
      
      <img src={pic} alt={name}></img>
    </div>
  )
}
 

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



function App() {
  
  return (
    <div>
      {players.map(player => (
         <Food rating = {player.rating} key ={player.id} name = {player.name} pic = {player.image} />
      ))}
    </div>
    
  ); 
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  rating: PropTypes.number
}
export default App;
