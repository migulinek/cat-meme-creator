import { UserModel } from "../../models/userModel";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MemeModel } from "../../models/memeModel";
import { LocationSearchingOutlined } from "@mui/icons-material";

export interface MemeItem {
  memeUrl: string;
  memeDescription?: string;
}

const initialUserState: UserModel = {
  id: -1,
  isLogged: false,
  temporaryMeme: { memeUrl: "" },
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
      state.userMemes = [];
    },
    setTemporaryMeme(state, action: PayloadAction<MemeModel>) {
      state.temporaryMeme = action.payload;
    },
    addMeme(state, action: PayloadAction<MemeModel>) {
      state.userMemes.push(action.payload);
    },
  },
});

export default userSlice;
