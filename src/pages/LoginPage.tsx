import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { ReactReduxContext } from "react-redux";
import { MutableRefObject, useContext, useRef } from "react";
import { authUser } from "../store/user/userActions";

function LoginPage() {
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector((state) => state.user.isLogged);
  const { store } = useContext(ReactReduxContext);
  let errorLoginInput = false;
  let username: string | undefined = "";
  const loginRef: MutableRefObject<HTMLInputElement | undefined> = useRef();

  const loginHandler = (event: any) => {
    // const usernameInput: HTMLInputElement | null = document.querySelector("#username");
    event.preventDefault();
    if (loginRef.current && loginRef.current.value !== "") {
      username = loginRef.current?.value;
      if (username.length < 5) {
        console.log("Dupa");

        errorLoginInput = true;
      }
    }
    return dispatch(authUser(username));
  };

  return (
    <>
      <h1>Login Page</h1>
      <br />
      <form onSubmit={loginHandler}>
        <input ref={loginRef} autoComplete="off" placeholder="type login" />
        <p>{errorLoginInput ? "Login should have at least 5 signs." : ""}</p>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default LoginPage;
