import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

import { HomeContainer } from 'components/HomeContainer/HomeContainer';
import { HomeText } from 'components/HomeText/HomeText';

const Home = () => {
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <HomeContainer />
      <HomeText />
    </Grid>
  );
};

export default Home;
