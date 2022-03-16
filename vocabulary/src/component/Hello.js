import React, { useState } from "react";

const Hello = () => {
  const [name, setName] = useState("jihoo");

  // const changeName = () => {
  //   const newName = name === "jihoo" ? "mike" : "jihoo";
  //   setName(newName);
  // };
  return (
    <div>
      <h1>state</h1>
      <h2>{name}</h2>
      <button
        onClick={() => {
          setName(name === "jihoo" ? "mike" : "jihoo");
        }}
      >
        Change
      </button>
    </div>
  );
};

export default Hello;
