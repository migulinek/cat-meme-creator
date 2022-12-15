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
    <header>
      <Link to="/">
        <img src="/logo.png" alt="" />
      </Link>
      <div className="buttons">
        <Link to={isLogged ? "" : "login"} onClick={logOutHandler}>
          <button className="btn">{isLogged ? "Sign out" : "Sign in"}</button>
        </Link>
        {isLogged && (
          <Link to="memes">
            <button className="btn secondary">Memes</button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
