import { Button, Grid, Typography } from "@mui/material";
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
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3">Home Page</Typography>
        {isMemeLimitAchieved && (
          <p>
            You've already genereted 3 memes. To create more you have to log in.
          </p>
        )}
      </Grid>
      <Grid item xs={12}>
        {!isMemeLimitAchieved && (
          <Button variant="contained" onClick={getCatHandler}>
            GET SOME CAT
          </Button>
        )}
      </Grid>
      <Grid item md={4}>
        <Meme src={lastGeneratedMeme} />
      </Grid>
    </Grid>
  );
};

export default HomePage;
