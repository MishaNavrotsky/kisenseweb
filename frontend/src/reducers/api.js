import { USER_LOGIN, LOADING_SCREEN } from "../actions/index";

const defaultApiState = {
  loadingScreen: false
};

export default (state = defaultApiState, action = {}) => {
  console.log(action);
  switch (action.type) {
    case USER_LOGIN:
      if (action.payload?.status === "error") return { ...state };
      return {
        ...state,
        user: action.payload
      };
    case LOADING_SCREEN:
      return {
        ...state,
        loadingScreen: action.payload
      };
    default:
      return state;
  }
};
