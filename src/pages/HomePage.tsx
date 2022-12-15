import { Link } from "react-router-dom";
import Meme from "../components/Meme";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { getRandomCat } from "../store/user/userActions";

const HomePage = () => {
  const dispatch = useAppDispatch();

  const isGuest = !useAppSelector((state) => state.user.isLogged);
  const memesCount = useAppSelector((state) => state.user.userMemes.length);
  const lastGeneratedMeme = useAppSelector(
    (state) => state.user.userMemes[memesCount - 1]
  );
  const memeLimit: number = 3;
  const isMemeLimitAchieved: boolean = isGuest && memesCount >= memeLimit;

  const getCatHandler = (event: any) => {
    event.preventDefault();
    return dispatch(getRandomCat());
  };

  return (
    <div className="container home-page">
      <h1>Home Page</h1>
      {isMemeLimitAchieved && (
        <p>
          You've already genereted 3 memes. To create more you have to log in.
        </p>
      )}
      {!isMemeLimitAchieved && (
        <button className="btn" onClick={getCatHandler}>
          GET SOME CAT
        </button>
      )}
      <Meme src={lastGeneratedMeme} />
    </div>
  );
};

export default HomePage;
