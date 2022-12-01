import React from "react";
import "../../../css/counter.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, byNum } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [inputNum, setInputNum] = useState(0);

  const inputValue = Number(inputNum) || 0;

  const resetAll = () => {
    setInputNum(0);
    dispatch(reset());
  };

  return (
    <div className="Counter">
      <p>{count}</p>
      <div className="btns">
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <input
        type="text"
        value={inputNum}
        onChange={(e) => setInputNum(e.target.value)}
      />
      <div className="other-btns">
        <button className="reset-btn" onClick={resetAll}>
          Reset
        </button>
        <button
          className="increment-btn"
          onClick={() => dispatch(byNum(inputValue))}
        >
          Increment by input
        </button>
      </div>
    </div>
  );
};

export default Counter;
