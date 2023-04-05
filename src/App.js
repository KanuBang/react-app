import React from "react";



// props가 전달되는 과정
// Food 컴포넌트에 설정한 props가 전달됨
// props를 구조 분해 할당으로 출력
function Food({fav}) {
  // {fav} = props; {fav}
  // props.fav
  return <h1>I LIKE {fav}</h1>
}

//props 이름: fav
//fav에 "sushi"라는 값을 담아 Food 컴포넌트에 보냄
// props에 있는 데이터는 문자열인 경우를 제외하면 모두 중괄호로 값을 감싼다.

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      {/*컴포넌트의 재사용*/}
      <Food fav="sushi"/>
      <Food fav="ramen"/>
      <Food fav="icecream"/>
    </div>
    
  ); 
}

/*
1. JSX는 잗ㄴ지 HTML과 자바스크립트를 조합한 문법
2. JSX를 이용해서 컴포넌트를 작성한다
3. 컴포넌트의 이름은 대문자로 시작한다
4. 컴포넌트에 데이터를 전달 할때는 props를 사용한다
5. 컴포넌트에 props를 전달하면 props에 있는 데이터가 하나의
객체로 변환된어 컴포넌트의 인자로 전달되고, 이걸 받아서 컴포넌트 함수에서 쓴다.
6. ES6 구조 분헤 할당을 사용하면 props를 더 편리하게 사용 가능하다.
*/
export default App;
