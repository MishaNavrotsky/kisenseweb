export const USER_LOGIN = "USER_LOGIN";
export const LOADING_SCREEN = "LOADING_SCREEN";
export const GAME_URL = "GAME_URL";

export const actionLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const actionShowLoadngScreen = (payload) => ({
  type: LOADING_SCREEN,
  payload,
});

export const setGameUrl = (payload) => ({
  type: GAME_URL,
  payload,
});
