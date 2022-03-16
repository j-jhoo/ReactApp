const Hello = () => {
  const showName = () => {
    console.log("hoo");
  };
  const inputText = (text) => {
    console.log(text);
  };
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={showName}>Show Name</button>
      <button
        onClick={() => {
          console.log("fkkffk");
        }}
      >
        Show Age
      </button>
      <input
        type="text"
        onChange={(e) => {
          const text = e.target.value;
          inputText(text);
        }}
      />
    </div>
  );
};

export default Hello;
