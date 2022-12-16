import { Card, CardMedia } from "@mui/material";

const Meme = (props: any) => {
  return (
    <Card>
      <CardMedia component="img" image={props.src} />
    </Card>
  );
};

export default Meme;
