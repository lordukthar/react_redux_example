import getUsers from "../../components/library/Server";
import React, { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = getUsers();
        const json = await response;
        console.log("json" + JSON.stringify(json));
        setUsers(json.map((it) => it.name));
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <React.Fragment>
        Users
        <ul class="list-group">
          <li class="list-group-item list-group-item-primary">List item 1</li>
          <li class="list-group-item list-group-item-primary">List item 2</li>
          <li class="list-group-item list-group-item-primary">List item 3</li>
        </ul>
      </React.Fragment>
      {users.map((person, i) => (
        <li key={i}>
          {i}: {person}
        </li>
      ))}
    </div>
  );
};
export default Users;
