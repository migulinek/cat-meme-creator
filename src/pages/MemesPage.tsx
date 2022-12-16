import { Grid, Typography } from "@mui/material";
import Meme from "../components/Meme";
import { useAppSelector } from "../hooks/redux-hooks";
import { MemeModel } from "../models/memeModel";

const MemesPage = () => {
  const memes: Array<MemeModel> = useAppSelector(
    (state) => state.user.userMemes
  );

  return (
    <Grid container spacing={2}>
      <Grid item md={12}>
        <Typography variant="h3">Memes Page</Typography>
      </Grid>
      {memes.map((meme: MemeModel) => (
        <Grid item md={4}>
          <Meme key={meme.memeUrl} meme={meme} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MemesPage;
