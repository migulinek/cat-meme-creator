import { Grid, Typography } from "@mui/material";
import Meme from "../components/Meme";
import { useAppSelector } from "../hooks/redux-hooks";

const MemesPage = () => {
  const memes: Array<string> = useAppSelector((state) => state.user.userMemes);

  return (
    <Grid container spacing={2}>
      <Grid item md={12}>
        <Typography variant="h3">Memes Page</Typography>
      </Grid>
      {memes.map((memeUrl: string) => (
        <Grid item md={4}>
          <Meme key={memeUrl} src={memeUrl} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MemesPage;
