import { useDispatch, useSelector } from "react-redux";

const User = () => {
  const user = useSelector((state) => state.userReducer);
  return <div>User choosen: {user.name}</div>;
};
export default User;
