import { useDispatch, useSelector } from "react-redux";

const User = () => {
  const user = useSelector((state) => state.userReducer);

  console.log("USER" + JSON.stringify(user));
  return (
    <div>
      User name: {user.name} Id: {user.id}
    </div>
  );
};
export default User;
