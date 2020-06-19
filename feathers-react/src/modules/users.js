import { userLogin } from "../lib/api/users";

const USERS_LOGIN = "users/USERS_LOGIN";
const USERS_LOGIN_SUCCESS = "users/USERS_LOGIN_SUCCESS";
const USERS_LOGIN_FAILURE = "users/USERS_LOGIN_FAILURE";
const USERS_LOGOUT_SUCCESS = "users/USERS_STATE";

// const usersState = (user) => {
//   return {
//     type: USERS_LOGOUT_SUCCESS,
//     payload: user,
//   };
// };
export const usersLogin = (user) => {
  return {
    type: USERS_LOGIN,
    payload: user,
  };
};

const usersSuccess = (response) => {
  return {
    type: USERS_LOGIN_SUCCESS,
    payload: response,
  };
};

const usersFailure = (error) => {
  return {
    type: USERS_LOGIN_FAILURE,
    payload: error,
  };
};

export const logoutThunk = (user) => async (dispatch, getState) => {
  try {
      console.log(user);
    const response = await userLogin(user);
    console.log(response);
    dispatch(usersSuccess(response));
  } catch (e) {
    console.log(e);
    dispatch(usersFailure(e));
  }
};

export const usersThunk = (user) => async (dispatch, getState) => {
  try {
    const response = await userLogin(user);
    console.log(response);
    dispatch(usersSuccess(response));
  } catch (e) {
    dispatch(usersFailure(e));
  }
};

const initialState = {
  user: null,
  auth: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USERS_LOGOUT_SUCCESS:
      return { ...state, auth: null };
    case USERS_LOGIN_SUCCESS:
      return { ...state, auth: action.payload };
    case USERS_LOGIN_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
