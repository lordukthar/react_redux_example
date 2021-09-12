import { combineReducers } from "redux";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

function countReducer(state = 0, action) {
  console.log(JSON.stringify(action.type));
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

const countApp = combineReducers({
  countReducer: countReducer,
});

export default countApp;
