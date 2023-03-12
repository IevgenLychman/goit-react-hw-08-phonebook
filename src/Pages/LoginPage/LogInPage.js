import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

import { HomeContainer } from 'components/HomeContainer/HomeContainer';
import { LoginForm } from 'components/LogInForm/LogInForm';

const LogInPage = () => {
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <HomeContainer />
      <LoginForm />
    </Grid>
  );
};

export default LogInPage;
