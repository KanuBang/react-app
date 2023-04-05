import React from 'react';
import ReactDOM from 'react-dom/client';

//src 폴더(./) 에서 폴더에 접근하여 컴포넌트를 임포트한다.
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
    // react의 컴포넌트 형태
    // react는 컴포넌트와 함께 동작하고, 리액트 앱은 모두 컴포넌트로 구성됨
    // APP 컴포넌트가 반환하는 것을 화면에 그린다.
    // App 컴포넌트가 그려질 위치는 두 번 째 인자로 전달한다.
    // App 컴포넌트는 아이디가 root인 엘리먼트에 그려질 것

    // 아 이게 구식 설명인데 자세힙 보니까
    // 애초에 createRoot 할때 선택자로 App 컴포넌트가 그려질 위치를 전달함
    // 그리고 메소드인 render app 컴포넌트가 반환하는 하는 것을 화면에 그림
);


