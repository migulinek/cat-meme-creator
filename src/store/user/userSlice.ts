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
    },
    logoutUser(state, action: PayloadAction<boolean>) {
      state.isLogged = action.payload;
    },
  },
});

export default userSlice;

/*
export const reducer = (
  state: any = DEFAULT_ROOT_STATE,
  action: any
): IRootState => {
  switch (action.type) {
    case USER_ACTION_TYPES.LOGIN:
      console.log(state.user);
      return {
        ...state,
        user: {
          isLogged: checkUsername(action.payload),
          userMemes: state.user.userMemes,
        },
      };
    case USER_ACTION_TYPES.LOGOUT:
      return { ...state, user: { isLogged: false } };
    default:
      return { ...state };
  }
};
*/
