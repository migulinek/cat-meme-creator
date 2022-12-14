const Header = () => {
  return (
    <header>
      <img src="/logo.png" alt="" />
      <div className="buttons">
        <a href="#">
          <button className="btn">Sign in</button>
        </a>
        <a href="#">
          <button className="btn secondary">Memes</button>
        </a>
      </div>
    </header>
  );
};

export default Header;
