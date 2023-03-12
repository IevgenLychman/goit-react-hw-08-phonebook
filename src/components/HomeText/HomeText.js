import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import { getIsLoggedIn, getIsRefreshing } from 'redux/auth/selectors';

import Typography from '@mui/material/Typography';

import { AuthNav, GoToContacts } from 'components/AuthNav/AuthNav';
import { Copyright } from 'components/Copyright/Copyright';

export function HomeText() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);

  return (
    <Grid
      item
      xs={12}
      sm={8}
      md={5}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
      component={Paper}
      elevation={6}
      square
    >
      {' '}
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h2" variant="h2" sx={{ mb: 2 }}>
          Phonebook
        </Typography>
        <Typography component="p" variant="h6">
          Hello my dear friend
        </Typography>
        <Typography component="p" variant="h8">
          I believed that this time would come
        </Typography>
      </Box>
      {isLoggedIn && !isRefreshing && <GoToContacts />}
      {!isLoggedIn && !isRefreshing && <AuthNav />}
      <Copyright />
    </Grid>
  );
}
