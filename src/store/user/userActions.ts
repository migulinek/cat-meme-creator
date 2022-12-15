import userSlice from "./userSlice";
import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../index";
import { UserModel } from "../../models/userModel";
import userService from "../../service/userService";

export const userActions = userSlice.actions;

export const authUser = (
  login: string | undefined
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    if (getState().user.isLogged === false) {
      try {
        const response: boolean = await userService.sendLogin(login);
        dispatch(userActions.loginUser(response));
      } catch (error) {
        dispatch(userActions.loginUser(false));
      }
    }
  };
};

export const deAuthUser = (
  login: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    if (getState().user.isLogged === true) {
      const response: boolean = await userService.sendLogout(login);
      dispatch(userActions.loginUser(response));
    }
  };
};
