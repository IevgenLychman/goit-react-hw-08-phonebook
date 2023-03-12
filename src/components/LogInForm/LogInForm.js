import * as React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

import { Copyright } from 'components/Copyright/Copyright';
import { NavLinkStyled } from './LogInForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    dispatch(
      logIn({
        email: form.get('email'),
        password: form.get('password'),
      })
    );
    e.currentTarget.reset();
  };

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
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h2" variant="h5">
          Sign In
        </Typography>
        <Box
          padding="60px"
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>

          <Grid container justifyContent="center">
            <Grid item>
              <NavLinkStyled to="/register">
                Don't have an account? Sign Up
              </NavLinkStyled>
            </Grid>
          </Grid>
          <Copyright />
        </Box>
      </Box>
    </Grid>
  );
};
