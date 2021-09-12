import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const counter = useSelector((state) => state.countReducer);

  return <div>Home {counter}</div>;
};

export default Home;
