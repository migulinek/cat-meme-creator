import userSlice from "./userSlice";
import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../index";
import userService from "../../service/userService";
import { MemeModel } from "../../models/memeModel";

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
  id: number
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    if (getState().user.isLogged === true) {
      const response: boolean = await userService.sendLogout(id);
      dispatch(userActions.loginUser(response));
    }
  };
};

export const setRandomCat = (
  meme: MemeModel
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    dispatch(userActions.setTemporaryMeme(meme));
  };
};

export const addMeme = (
  meme: MemeModel
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    dispatch(userActions.addMeme(meme));
    dispatch(userActions.setTemporaryMeme({ memeUrl: "" }));
  };
};
