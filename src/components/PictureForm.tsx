import { Button, FormControl, Grid, TextField } from "@mui/material";
import { MemeModel } from "../models/memeModel";
import { API_URL } from "../service/CatApi.ts";
import Meme from "./Meme";

export interface PictureFormInterface {
  savePictureHandler: (event: any) => void;
  meme: MemeModel;
}

const PictureForm = (props: PictureFormInterface) => {
  const minMemeUrlLength: number = API_URL.length + "images/x.jpg".length;
  const isMemeUrlLoaded: boolean =
    props.meme?.memeUrl?.length >= minMemeUrlLength;

  return (
    <>
      <Meme meme={props.meme} />
      {isMemeUrlLoaded && (
        <form onSubmit={props.savePictureHandler}>
          <FormControl>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="memeUrl"
                  sx={{ display: "none" }}
                  value={props.meme.memeUrl}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="memeDescription"
                  autoComplete="off"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </FormControl>
        </form>
      )}
    </>
  );
};

export default PictureForm;
