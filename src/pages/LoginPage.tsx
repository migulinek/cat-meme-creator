import { useForm, Resolver } from "react-hook-form";
import { useDispatch } from "react-redux";
import { IUserAction, USER_ACTION_TYPES } from "../store/appState";
import { ReactReduxContext } from "react-redux";
import { useContext } from "react";

type FormValues = {
  login: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.login ? values : {},
    errors:
      values.login.length < 5
        ? {
            login: {
              type: "required",
              message: "Login should have at least 5 signs.",
            },
          }
        : {},
  };
};

function LoginPage() {
  const dispatch = useDispatch();
  const { store } = useContext(ReactReduxContext);

  const dispatchLogin = (username: string) => {
    return dispatch(loginUser(username));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => {
    console.log(data.login);
    dispatchLogin(data.login);
  });

  console.dir(store.getState());

  return (
    <>
      <h1>Login Page</h1>
      <br />
      <form onSubmit={onSubmit}>
        <input
          autoComplete="off"
          {...register("login")}
          placeholder="type login"
        />
        {errors?.login && <p>{errors.login.message}</p>}

        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

function loginUser(username: string): IUserAction {
  return {
    type: USER_ACTION_TYPES.LOGIN,
    payload: username,
  };
}

export default LoginPage;
