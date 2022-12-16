import { Button, Typography } from "@mui/material";
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
      <Typography variant="h3">Home Page</Typography>
      {isMemeLimitAchieved && (
        <p>
          You've already genereted 3 memes. To create more you have to log in.
        </p>
      )}
      {!isMemeLimitAchieved && (
        <Button variant="contained" onClick={getCatHandler}>
          GET SOME CAT
        </Button>
      )}
      <Meme src={lastGeneratedMeme} />
    </div>
  );
};

export default HomePage;
