import { Typography } from "@mui/material";
import Meme from "../components/Meme";
import { useAppSelector } from "../hooks/redux-hooks";

const MemesPage = () => {
  const memes: Array<string> = useAppSelector((state) => state.user.userMemes);

  return (
    <>
      <Typography variant="h3">Memes Page</Typography>
      {memes.map((memeUrl: string) => (
        <Meme key={memeUrl} src={memeUrl} />
      ))}
    </>
  );
};

export default MemesPage;
