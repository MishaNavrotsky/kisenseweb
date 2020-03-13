export const USER_LOGIN = "USER_LOGIN";
export const LOADING_SCREEN = "LOADING_SCREEN";

export const actionLogin = payload => ({
  type: USER_LOGIN,
  payload
});

export const actionShowLoadngScreen = payload => ({
  type: LOADING_SCREEN,
  payload
});
