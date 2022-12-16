import { Grid, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <Grid container spacing={2} sx={{ textAlign: "center" }}>
      <Grid item xs={12}>
        <Typography variant="h3">404</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">Back to</Typography>
      </Grid>
      <Grid item xs={12}>
        <Link to="/">
          <Button size="small" variant="contained">
            Home Page
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Page404;
