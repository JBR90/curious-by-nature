import authService from "../../services/eventService";

const reducer = (state = [null], action) => {
  // console.log("ACTION:", action);
  // console.log("state", state);
  switch (action.type) {
    case "USER_LOGIN":
      return [action.data];
    case "USER_LOGOUT":
      return [null];

    default:
      return state;
  }
};

export const userLogin = (email, password) => {
  return async (dispatch) => {
    const user = await authService.login(email, password);
    dispatch({
      type: "USER_LOGIN",
      data: user,
    });
  };
};

export const userLogout = () => {
  return async (dispatch) => {
    await authService.logout();
    dispatch({
      type: "USER_LOGOUT",
      data: null,
    });
  };
};

export default reducer;
