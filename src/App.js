import React from "react";


//props 이름: fav
//fav에 "sushi"라는 값을 담아 Food 컴포넌트에 보냄
// props에 있는 데이터는 문자열인 경우를 제외하면 모두 중괄호로 값을 감싼다.

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Food fav="sushi" somthis = {true} papapapa={['hello', 1, 2, 3, 4, true]}/>
    </div>
    
  ); 
}

// props가 전달되는 과정
// Food 컴포넌트에 전달한 props를 속성으로 가지는 객체가 출력됨
function Food(props) {
  console.log(props)
  return <h1>I LIKE POTATO</h1>
}



export default App;
