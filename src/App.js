import React from "react";
import Potato from "./Potato";

// App 컴포넌트가 html을 반환한다.
// App 함수가 반환한 HTML이 리액트 앱 화면에 그려진다.
function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Potato />
    </div>
    
    // Potato.js에 Potato 컴포넌트를 만든다 (JSX)
    // App 컴포넌트의 반환 값으로 Potato 컴포넌트를 추가
    // 리턴
    // index.js 리턴 받은 값을 렌더링한다.
  ); 
}

export default App;
