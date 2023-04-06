import React from "react";

// App 클래스는 React.Component 클래스를 상속 받음. (필수)
// APP 클래스가 React.Component 클래스에 있는 기능을 물려 받음.
// 클래스 컴포넌트는 JSX를 반환해야 함.
// 클래스는 함수가 아니기에 JSX를 반환하기 위해 render 함수를 이용
// 함수형 컴포넌트는 return문이 JSX를 반환한다.

class App extends React.Component {
  render( ) {
    return <h1>I'm s class Component</h1>;
  }
}
export default App;
