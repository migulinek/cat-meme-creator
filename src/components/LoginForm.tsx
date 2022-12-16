import { Box, Button, FormControl, TextField } from "@mui/material";

export interface LoginFormInterface {
  loginHandler: (event: any) => void;
  loginRef: any;
  errorMsg: string;
}

const LoginForm = (props: LoginFormInterface) => {
  return (
    <>
      <form onSubmit={props.loginHandler}>
        <FormControl>
          <Box mt={3}>
            <TextField
              error={props.errorMsg?.length > 0}
              fullWidth
              inputRef={props.loginRef}
              autoComplete="off"
              label="Type Your login *"
              variant="standard"
              helperText={props.errorMsg}
            />
            <Box mt={1}>
              <Button type="submit" variant="contained" color="primary">
                Log in
              </Button>
            </Box>
          </Box>
        </FormControl>
      </form>
    </>
  );
};

export default LoginForm;
