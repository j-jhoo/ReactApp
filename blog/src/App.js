import "./App.scss";

const App = () => {
  const lala = "강남 맛집";

  return (
    <div className="App">
      <header className="blackNav">
        <div>개발 블로그</div>
      </header>
      <div className="list">
        <h3>{lala}</h3>
        <p>2월 18일 발행</p>
        <hr />
      </div>
    </div>
  );
};
export default App;
