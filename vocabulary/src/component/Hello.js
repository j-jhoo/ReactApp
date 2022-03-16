import React, { useState } from "react";
import styles from "./Hello.module.css";
import UserName from "./UserName";

const Hello = ({ age }) => {
  const [name, setName] = useState("jihoo");
  const msg = age > 19 ? "성인" : "미셩년자";

  // const changeName = () => {
  //   const newName = name === "jihoo" ? "mike" : "jihoo";
  //   setName(newName);
  // };

  return (
    <div className={styles.Hello}>
      <h1>state</h1>
      <h2>
        {name}({age}) : {msg}
      </h2>
      <UserName name={name} />
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
