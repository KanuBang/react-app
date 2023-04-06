import React from "react";

// 마지막에 세미콜론 필수! 
// state를 사용하려면 반드시 클래스형 컴포넌트 안에서, 소문자를 이용하여 state라고 적는다.
// state는 동적 데이터를 저장할 수 있다.
// 동적 데이터란 변경될 가능성이 있는 데이터를 말한다.

//리액트는 state를 직접 변경하는 코드를 허용하지 않는다.
//즉. add 함수 안에서 this.state.count = 1 해도 화면에는 변환가 없다.
 
class App extends React.Component {
  state = {
    count: 0,
  };
  add = ( ) => {
    this.setState({count: 1})
  }

  minus = ( ) => {
    console.log("MINUS")
    this.setState({count: -1})
  }

  render( ) {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>   
    )
  }
}
export default App;
