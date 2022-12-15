import { UserModel } from "../../models/userModel";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialUserState: UserModel = {
  id: -1,
  isLogged: false,
  userMemes: [],
};

const userSlice = createSlice({
  name: "user-slice",
  initialState: initialUserState,
  reducers: {
    loginUser(state, action: PayloadAction<boolean>) {
      state.isLogged = action.payload;
      state.id = 1; // Fake User ID
    },
    logoutUser(state, action: PayloadAction<boolean>) {
      state.isLogged = action.payload;
      state.id = -1; // Fake Guest ID
    },
    addMeme(state, action: PayloadAction<string>) {
      state.userMemes.push(action.payload);
    },
  },
});

export default userSlice;
