import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [temp, setTemp] = useState(25);
  const [color, setColor] = useState(false);

  function increase() {
    setTemp(temp + 1);
    if (temp === 20) {
      setColor(!color);
    }
  }
  function decrease() {
    setTemp(temp - 1);
    if (temp === 20) {
      setColor(!color);
    }
  }

  return (
    <div className={color ? "coldParent" : "hotParent"}>
      {/* <img src="https://thumb.silhouette-ac.com/t/b3/b316e7e50ab0f11b5c9a856ea0a3eab7_t.jpeg" alt="" /> */}
      <div className={color ? "coldCir" : "hotCir"}>
        <div className="temp">
          <h1>{temp+"°C"}</h1>
        </div>
        <div>
          <button className="buttons" onClick={increase}>+</button>
          <button className="buttons" onClick={decrease}>-</button>
        </div>
        {/* <input type="button" name="+" id="" + /> */}
        {/* <div className="dec">-</div> */}
      </div>
    </div>
  );
};

export default App;
