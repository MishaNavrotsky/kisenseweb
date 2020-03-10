import { USER_LOGIN } from "../actions/index";

export default (state = {}, action = {}) => {
  console.log(action);
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
