import React, { useState } from "react";
import "./App.scss";

const App = () => {
  const [blogTitle, setBlogTitle] = useState([
    "리액트 라이브러리",
    "리액트",
    "자바스크립트",
  ]);

  const [good, setGood] = useState(0);

  const upGoodButton = () => {
    setGood(good + 1);
  };

  const changeTitleButton = () => {
    let newTitle = [...blogTitle];
    newTitle[0] = "뷰 라이브러리";
    setBlogTitle(newTitle);
  };

  return (
    <div className="App">
      <header className="blackNav">
        <div>개발 블로그</div>
      </header>
      <div className="list">
        <h3>
          {blogTitle[0]} <span onClick={upGoodButton}>👍🏻 </span> {good}
        </h3>
        <p>2월 18일 발행</p>
        <button onClick={changeTitleButton}>버튼</button>
        <hr />
      </div>
    </div>
  );
};
export default App;
