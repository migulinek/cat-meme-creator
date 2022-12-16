import { Container, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <>
      <Container sx={{ textAlign: "center" }}>
        <Typography variant="h3">404</Typography>
        <p>Back to</p>
        <Link to="/">
          <Button size="small" variant="contained">
            Home Page
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default Page404;
