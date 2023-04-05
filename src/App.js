import React from "react";


// App 컴포넌트가 html을 반환한다.
// App 함수가 반환한 HTML이 리액트 앱 화면에 그려진다.
function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Potato />
    </div>
    
  ); 
}

// App 내부에 Potato 컴포넌트 만들기
function Potato( ) {
  return <h1>I LIKE POTATO</h1>
}


export default App;
