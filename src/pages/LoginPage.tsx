import { useAppDispatch } from "../hooks/redux-hooks";
import { MutableRefObject, useRef, useState } from "react";
import { authUser } from "../store/user/userActions";
import LoginForm, { ErrorInput } from "../components/LoginForm";

function LoginPage() {
  // Local State
  const [errorLoginInput, setErrorLoginInput] = useState<
    ErrorInput | undefined
  >();
  // Global State
  const dispatch = useAppDispatch();

  let username: string | undefined = "";
  const loginRef: MutableRefObject<HTMLInputElement | undefined> = useRef();

  const loginHandler = (event: any) => {
    // const usernameInput: HTMLInputElement | null = document.querySelector("#username");
    event.preventDefault();
    if (loginRef.current && loginRef.current.value !== "") {
      username = loginRef.current?.value;
      setErrorLoginInput({
        errorMsg:
          username.length < 5 ? "Login should have at least 5 signs." : "",
      });
    }
    return dispatch(authUser(username));
  };

  return (
    <>
      <h1>Login Page</h1>
      <LoginForm
        loginHandler={loginHandler}
        loginRef={loginRef}
        errorLoginInput={errorLoginInput}
      />
    </>
  );
}

export default LoginPage;
