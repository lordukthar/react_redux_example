import getUsers from "../../components/library/Server";
import React, { useState, useEffect } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
//import changeUser from "../../reducer";

const Users = () => {
  const [names, setNames] = useState([]);
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  //const userReducer = useSelector((state) => state.userReducer);

  function handleListItemClick(event, index) {
    getIndex(index+1);
  }

  function getIndex(id) {
    var us = users.find((u) => u.id === id);
    dispatch({ type: "CHOOSE", user: us.name });
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = getUsers();
        const json = await response;
        setNames(json.map((it) => it.name));
        setUsers(json);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <List component="nav" aria-label="contacts">
        {names.map((name, i) => (
          <ListItem button key={i}>
            <ListItemText
              key={i}
              inset
              primary={name}
              onClick={(event) => handleListItemClick(event, i)}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
export default Users;
