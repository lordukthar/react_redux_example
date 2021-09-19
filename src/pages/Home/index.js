import React, { useState, useEffect, useRef } from "react";
import Statement from "../../components/features/Statement";
import { useSelector } from "react-redux";
import { List, ListItem, ListItemText } from "@material-ui/core";

const Home = () => {
  const counter = useSelector((state) => state.countReducer);
  const users = useSelector((state) => state.usersReducer);
  const [names, setNames] = useState([]);
  const hasFetchedData = useRef(false);

  useEffect(() => {
    if (!hasFetchedData.current) {
      async function fetchData() {
        try {
          users.map((user, i) => console.log("Home:" + user.name));
          setNames(users);
          names.map((user, i) => console.log("HomeXXX:" + user.name));
          hasFetchedData.current = true;
        } catch (e) {
          console.error(e);
        }
      }
      fetchData();
    }
  }, [names, users]);

  //Only for iterables
  // let dateFields = [1970, 0, 1];
  // let d = new Date(...dateFields);

  //let parts = ["shoulders", "knees"];
  // let lyrics = ["head", ...parts, "and", "toes"];

  //console.log("XX: " + lyrics);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <List component="nav" aria-label="contacts">
        {names.map((name, i) => (
          <ListItem button key={i}>
            <ListItemText key={i} inset primary={name.name} />
          </ListItem>
        ))}
      </List>

      <div className="mt-10 flex flex-col items-center pb-24">
        <Statement />
        The total number of count: {counter}
      </div>
    </div>
  );
};

export default Home;
