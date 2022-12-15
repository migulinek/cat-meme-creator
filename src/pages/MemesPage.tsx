import Meme from "../components/Meme";
import { useAppSelector } from "../hooks/redux-hooks";

const MemesPage = () => {
  const memes: Array<string> = useAppSelector((state) => state.user.userMemes);

  return (
    <>
      {memes.map((memeUrl: string) => (
        <Meme key={memeUrl} src={memeUrl} />
      ))}
    </>
  );
};

export default MemesPage;
