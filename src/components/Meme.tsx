import "./Meme.scss";

const Meme = (props: any) => {
  return (
    <div className="meme-container">
      <img src={props.src} />
    </div>
  );
};

export default Meme;
