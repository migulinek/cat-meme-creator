import { getCatUrl } from "../services/getCatUrl";

const HomePage = () => {
  return (
    <div className="container home-page">
      <h1>Home Page</h1>
      <button className="btn" onClick={() => getCatUrl()}>
        GET SOME CAT
      </button>
    </div>
  );
};

export default HomePage;
