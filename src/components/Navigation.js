import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    //Link 가 React 로 html 에 들어갈 때는 a 태그로 들어가니까 css 꾸미실 분들은 a 로 하시면 됩니다!
    // Link는 router 밖에서 쓸 수 없다.
    // href를 to로 쓴다.
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;