import React from "react";
import Statement from "../../components/features/Statement";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const counter = useSelector((state) => state.countReducer);

  return (
    <div className="mt-10 flex flex-col items-center pb-24">
      <Statement />
      The total number of count: {counter}
    </div>
  );
};
export default Home;
