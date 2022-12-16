import { AppBar, Box, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { deAuthUser } from "../store/user/userActions";

const Header = () => {
  const isLogged = useAppSelector((state) => state.user.isLogged);
  const userId = useAppSelector((state) => state.user.id);
  const dispatch = useAppDispatch();
  const logOutHandler = () => {
    if (isLogged) {
      return dispatch(deAuthUser(userId));
    }
  };

  return (
    <Box mb={3}>
      <AppBar
        position="static"
        sx={{
          boxShadow: "none",
          backgroundColor: "white",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Link to="/">
            <img src="/logo.png" alt="" />
          </Link>
        </Box>
        <Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Link to={isLogged ? "" : "login"} onClick={logOutHandler}>
              <Box>
                <Button variant="contained" size="small">
                  {isLogged ? "Sign out" : "Sign in"}
                </Button>
              </Box>
            </Link>
            {isLogged && (
              <Link to="memes">
                <Box ml={1}>
                  <Button variant="contained" size="small" color="secondary">
                    Memes
                  </Button>
                </Box>
              </Link>
            )}
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Header;
