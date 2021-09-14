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
  name: "Unknown",
};

export function changeUser(user) {
  return {
    type: CHOOSE,
    user,
  };
}

function userReducer(state = defaultUser, action) {
  switch (action.type) {
    case CHOOSE:
      return { name: action.user };
    default:
      return state;
  }
}

const countApp = combineReducers({
  countReducer: countReducer,
  userReducer: userReducer,
});

export default countApp;
