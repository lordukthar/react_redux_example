import { useSelector } from "react-redux";
import styled from "styled-components";
import { getUser } from "../../components/library/Server";
import { useState } from "react";

const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593",
  },
  pink: {
    default: "#e91e63",
    hover: "#ad1457",
  },
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "blue",
};

const User = () => {
  const user = useSelector((state) => state.userReducer);
  const [userDetail, setUserDetail] = useState({});

  async function getUserDetails(event, id) {
    console.log("json");
    const response = getUser(id);
    const json = await response;
    console.log(json);
    setUserDetail(json);
  }
  return (
    <div>
      <Button onClick={(e) => getUserDetails(e, user.id)}>
        Get user details
      </Button>

      <div class="form-group">
        <label for="exampleFormControlTextarea2">Name</label>
        <textarea
          class="form-control rounded-0"
          id="exampleFormControlTextarea2"
          rows="1"
          value={userDetail.name}
        ></textarea>
        <label for="exampleFormControlTextarea2">Id</label>
        <textarea
          class="form-control rounded-0"
          id="exampleFormControlTextarea2"
          rows="1"
          value={userDetail.id}
        ></textarea>
      </div>
    </div>
  );
};
export default User;
