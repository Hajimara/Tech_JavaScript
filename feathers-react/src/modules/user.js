import { userInfo } from "../lib/api/user";

import Cookies from "universal-cookie";

const USER_INFO_SUCCESS = "user/USER_INFO_SUCCESS";
const USER_INFO_FAILURE = "user/USER_INFO_FAILURE";

const userInfoSuccess = (user) => {
  return {
    type: USER_INFO_SUCCESS,
    payload: user,
  };
};
const userInfoFailure = (error) => {
  return {
    type: USER_INFO_FAILURE,
    payload: error,
  };
};

export const userInfoThunk = () => async (dispatch, getState) => {
  try {
    const response = await userInfo();
    console.log(response);
    dispatch(userInfoSuccess(response));
  } catch (error) {
    console.log(error);
    const cookies = new Cookies();
    cookies.remove("access_token");
    dispatch(userInfoFailure(error));
  }
};

const initialState = {
  userInfo: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_INFO_SUCCESS:
      return { ...state, userInfo: action.payload };
    case USER_INFO_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
