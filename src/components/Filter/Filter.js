import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/contactsSlice';

import { Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const saveFilterValue = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <Label>
      <Typography component="h2" variant="h5">
        Find contact by name
      </Typography>
      <Box component="form" noValidate onChange={saveFilterValue}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoFocus
        />
      </Box>
    </Label>
  );
};
