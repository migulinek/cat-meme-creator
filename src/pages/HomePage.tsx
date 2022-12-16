import { Button, Grid, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { setRandomCat, userActions } from "../store/user/userActions";
import PictureForm from "../components/PictureForm";
import { getCatUrl } from "../service/CatApi.ts";
import { MemeModel } from "../models/memeModel";

const HomePage = () => {
  const dispatch = useAppDispatch();

  const isGuest = !useAppSelector((state) => state.user.isLogged);
  const memesCount = useAppSelector((state) => state.user.userMemes.length);
  const lastGeneratedMeme = useAppSelector((state) => state.user.temporaryMeme);
  const memeLimit: number = 3;
  const isMemeLimitAchieved: boolean = isGuest && memesCount >= memeLimit;

  const getCatHandler = async (event: any) => {
    event.preventDefault();
    const catUrl: string = await getCatUrl();
    const meme: MemeModel = { memeUrl: catUrl };
    return dispatch(setRandomCat(meme));
  };

  const savePictureHandler = (event: any) => {
    event.preventDefault();
    const memeUrl: string = event.target.memeUrl?.value;
    const memeDescription: string = event.target.memeDescription?.value;
    dispatch(setRandomCat({ memeUrl: "" }));
    return dispatch(userActions.addMeme({ memeUrl, memeDescription }));
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
      <Grid item md={6}>
        <PictureForm
          savePictureHandler={savePictureHandler}
          meme={lastGeneratedMeme}
        />
      </Grid>
    </Grid>
  );
};

export default HomePage;
