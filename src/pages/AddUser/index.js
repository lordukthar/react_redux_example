import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Component, TextField } from "@material-ui/core";

export class UserData {
  constructor(name, username) {
    this.name = name;
    this.username = username;
  }
}

const AddUser = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersReducer);

  function jalla() {
    console.log(document.getElementById("user_name").value);
    console.log(document.getElementById("user_uid").value);
    var a = new UserData(
      document.getElementById("user_name").value,
      document.getElementById("user_uid").value
    );

    dispatch({ type: "ADD_USER", user: a });

    console.log(JSON.stringify(users));
    users.map((user, i) => console.log("AddUser:" + user.name));
  }

  return (
    <div>
      <div class="row g-3 align-items-center">
        <div class="form-outline col-auto">
          <input
            type="text"
            id="user_name"
            class="form-control"
            aria-describedby="textExample2"
          />
          <label class="form-label" for="formTextExample2">
            Name
          </label>
        </div>
      </div>
      <div class="row g-3 align-items-center">
        <div class="form-outline col-auto">
          <input
            type="text"
            id="user_uid"
            class="form-control"
            aria-describedby="textExample2"
          />
          <label class="form-label" for="formTextExample2">
            User id
          </label>
        </div>
      </div>
      <form>
        <input type="button" value="Submit" onClick={jalla} />
      </form>
    </div>
  );
};
export default AddUser;
