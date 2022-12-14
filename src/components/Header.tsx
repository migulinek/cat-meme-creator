import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src="/logo.png" alt="" />
      </Link>
      <div className="buttons">
        <Link to="login">
          <button className="btn">Sign in</button>
        </Link>
        <Link to="memes">
          <button className="btn secondary">Memes</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
