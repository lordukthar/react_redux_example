import { useDispatch, useSelector } from "react-redux";

const User = () => {
  const counter = useSelector((state) => state.countReducer);
  return <div>User choosen: {counter}</div>;
};
export default User;
