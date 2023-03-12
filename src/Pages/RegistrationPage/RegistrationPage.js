import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

import { HomeContainer } from 'components/HomeContainer/HomeContainer';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';

const RegistrationPage = () => {
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <HomeContainer />
      <RegistrationForm />
    </Grid>
  );
};

export default RegistrationPage;
