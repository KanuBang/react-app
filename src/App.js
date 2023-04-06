import React from "react";


class App extends React.Component {
  state = {
    isLoading: true,
  };

  // 컴포넌트가 그려지면(render) 호출되는 생명주기 함수 
  componentDidMount( ) {
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 6000)
  }

  render( ) {
    const {isLoading} = this.state;
    return <div>{isLoading ? "Loading..." : "we are ready"} </div>;
  }

  /* 
  1. render로 컴포넌트를 그림 
  2. 처음에는 state가 true 이기 때문에 Loading...이 화면에 표시됨
  3. 컴포넌트가 그려지고 나서 componentDidMount가 실행
  4. setState 6초 후에 isLoading state를 false로 바꿈
  5. 화면에 we are ready가 표시됨

  => 이 componentDidMount로 영화 데이터를 로딩한다.
  */
}

export default App;
