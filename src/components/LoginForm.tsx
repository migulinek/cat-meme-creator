export interface ErrorInput {
  errorMsg: string;
}

export interface LoginFormInterface {
  loginHandler: (event: any) => void;
  loginRef: any;
  errorLoginInput: ErrorInput | undefined;
}

const LoginForm = (props: LoginFormInterface) => {
  return (
    <>
      <form onSubmit={props.loginHandler}>
        <input
          ref={props.loginRef}
          autoComplete="off"
          placeholder="type login"
        />
        <p>{props.errorLoginInput?.errorMsg}</p>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default LoginForm;
