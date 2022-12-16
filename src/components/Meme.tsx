import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { MemeModel } from "../models/memeModel";

const Meme = (props: { meme: MemeModel }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{props.meme?.memeDescription}</Typography>
      </CardContent>
      <CardMedia component="img" image={props.meme?.memeUrl} />
    </Card>
  );
};

export default Meme;
