import { Link } from "react-router-dom";
import "./Page404.scss";

const Page404 = () => {
  return (
    <div className="page-404">
      <h1>404</h1>
      <p>Back to</p>
      <Link to="/">
        <button className="btn small">Home Page</button>
      </Link>
    </div>
  );
};

export default Page404;
