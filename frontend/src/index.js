import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";





function Counter() {
  let [count, setCount] = useState(0);
  let [data, setData] = useState([]);
  const increment = () => {
    setCount(count + 1);
  };

  const getData = async () => {
    let userData = await axios.get("/data");
    let obj = userData.data;
    setData([...data, obj]);
  };

  return (
    <>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      {data.map((d, i) => {
        return (
          <p key={i}>
            Student name is {d.name} and his age is {d.age}
          </p>
        );
      })}
      <button
        onClick={() => {
          getData();
        }}
      >
        Get Data
      </button>
    </>
  );
}

ReactDOM.render(<Counter />, document.getElementById("root"));
