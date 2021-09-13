import getUsers from "../../components/library/Server";
import React, { useState, useEffect, ReactTable } from "react";


const Users = () => {
  const [users, setUsers] = useState([]);

  function jalla(i) {
    console.log(i);
  }

 

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
      <ul class="list-group">
        {users.map((person, i) => (
          <li
            key={i}
            class="list-group-item list-group-item-primary"
            onClick={jalla(i)}
            active
          >
            {" "}
            {i}: {person}
          </li>
        ))}
      </ul>

   
    </div>
  );
};
export default Users;


