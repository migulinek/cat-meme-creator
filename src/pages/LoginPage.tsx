import { useAppDispatch } from "../hooks/redux-hooks";
import { MutableRefObject, useRef, useState } from "react";
import { authUser } from "../store/user/userActions";
import LoginForm from "../components/LoginForm";
import { Grid, Typography } from "@mui/material";

function LoginPage() {
  // Local State
  const [errorLoginInput = "", setErrorLoginInput] = useState<string>();
  // Global State
  const dispatch = useAppDispatch();

  let username: string | undefined = "";
  const loginRef: MutableRefObject<HTMLInputElement | undefined> = useRef();

  const loginHandler = (event: any) => {
    // const usernameInput: HTMLInputElement | null = document.querySelector("#username");
    event.preventDefault();

    if (loginRef.current && loginRef.current.value !== "") {
      username = loginRef.current?.value;
      const errorMsg: string =
        username?.length < 5 ? "Login should have at least 5 signs." : "";
      setErrorLoginInput(errorMsg);
    }

    dispatch(authUser(username));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3">Login Page</Typography>
      </Grid>
      <Grid item xs={12}>
        <LoginForm
          savePictureHandler={loginHandler}
          loginRef={loginRef}
          errorMsg={errorLoginInput}
        />
      </Grid>
    </Grid>
  );
}

export default LoginPage;
