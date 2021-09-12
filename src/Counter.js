import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.countReducer);

  function increment() {
    dispatch({ type: "INCREMENT" });
  }

  function decrement() {
    dispatch({ type: "DECREMENT" });
  }

  return (
    <div>
      Counter {counter}
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Minus</button>
    </div>
  );
};

export default Counter;
