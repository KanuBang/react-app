import React from "react";

// setState() 함수가 동작하면 state가 새로운 값으로 바뀐다.
// 이어서 render 함수를 동작시켜 화면을 업데이트 한다.
// 필요한 부분만 바꿀 수 있기에 React는 화면 구성이 빠르다.
// 리액트는 이전 state와 새로운 state를 비교하여 바뀐 데이터만 업데이트 한다.
class App extends React.Component {
  // constructor()가 render() 함수보다 더 먼저 실행된다.
  constructor(props) {
    super(props)
    console.log("Hello")
  }

  //render 함수가 실행된 다음 실행됨
  //컴포넌트가 처음 화면에 그려지면 실행되는 함수
  componentDidMount( ) {
    console.log("component rendered")
  }

  //컴포넌트가 업데이트될 때 실행되는 함수
  componentDidUpdate( ) {
    console.log("component updated")
  }

  //컴포넌트가 화면에서 떠날 때 실행 됨.
  componentWillUnmount( ) {
    console.log("die")
  }

  state = {
    count: 0,
  };

  add = ( ) => {
    this.setState(current => ({
      count: current.count + 1
    }))
  }
  // state를 직접적으로 업데이트하기 보다는 콜백 함수를 전달하여 state를 업데이트 하자.
  // state를 직접적으로 업데이트하면 성능 이슈가 발생
  minus = ( ) => {
    console.log("MINUS")
    // current에는 현재의 state가 넘어가고 그 state 객체의 count에 -1 한다.
    this.setState(current => ({
      count: current.count - 1
    }))
  }

  render( ) {
    console.log("render")
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
