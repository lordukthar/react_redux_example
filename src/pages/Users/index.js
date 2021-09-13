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
        <ul class="list-group">
        {users.map((person, i) => (
          <li key={i} class="list-group-item list-group-item-primary"> {i}: {person}</li>
          ))}
        </ul>
    
      
    </div>
  );
};
export default Users;
