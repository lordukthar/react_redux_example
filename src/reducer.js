import { combineReducers } from "redux";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const CHOOSE = "CHOOSE";

function countReducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

const defaultUser = {
  name: "",
  username: "",
  email: "",
  id: 0,
};

const ADD_USER = "ADD_USER";

const defaultUsers = [
  {
    name: "AJA",
    username: "AJA_UA",
  },
];

function usersReducer(state = defaultUsers, action) {
  console.log("usersReducer" + JSON.stringify(action));
  switch (action.type) {
    case ADD_USER:
      console.log("ADD_USER" + JSON.stringify(action.user));

      var a = [
        ...state,
        {
          name: action.user.name,
          username: action.user.username,
        },
      ];
      console.log("ADD_USER" + JSON.stringify(a));
      return a;
    default:
      return state;
  }
}

export function changeUser(user) {
  return {
    type: CHOOSE,
    user,
  };
}

function userReducer(state = defaultUser, action) {
  console.log("userReducer: " + JSON.stringify(action));
  switch (action.type) {
    case CHOOSE:
      return {
        name: action.user.name,
        username: action.user.username,
        email: action.user.email,
        id: action.user.id,
      };
    default:
      return state;
  }
}

const countApp = combineReducers({
  countReducer: countReducer,
  userReducer: userReducer,
  usersReducer: usersReducer,
});

export default countApp;
