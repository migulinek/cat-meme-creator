export interface IUserAction {
  type: USER_ACTION_TYPES;
  payload: string;
}

export enum USER_ACTION_TYPES {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  ADD_MEME = "ADD_MEME",
}

export interface IRootState {
  user: IUser;
}

interface IUser {
  isLogged: boolean;
  userMemes: Array<string>;
}

const DEFAULT_ROOT_STATE = {
  user: {
    isLogged: false,
    userMemes: [],
  },
};

export const loginUser = (name: string) => ({
  type: USER_ACTION_TYPES.LOGIN,
  payload: name,
});

export const reducer = (
  state: any = DEFAULT_ROOT_STATE,
  action: any
): IRootState => {
  switch (action.type) {
    case USER_ACTION_TYPES.LOGIN:
      console.log(state.user);
      return { ...state, user: { isLogged: checkUsername(action.payload) } };
    case USER_ACTION_TYPES.LOGOUT:
      return { ...state, user: { isLogged: false } };
    default:
      return { ...state };
  }
};

function checkUsername(username: string) {
  return username.length >= 5 ? true : false;
}
