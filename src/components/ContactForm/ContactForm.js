import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import { toast } from 'react-toastify';

export const ContactForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  console.log(contacts);

  const handleSubmit = e => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const newName = {
      name: data.get('name'),
      number: data.get('number'),
    };



    const nameExist = contacts
      .map(contact => contact.name.toLowerCase())
      .some(el => el === newName.name);

    if (nameExist) {
      toast.error('A contact with that name already exists.');
    }

    dispatch(addContact(newName));
    e.currentTarget.reset();
    closeModal();
  };

  return (
    <Grid>
      <Box padding="0 60px" component="form" noValidate onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="number"
          label="Number"
          type="tel"
          id="number"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Add contact
        </Button>
      </Box>
    </Grid>
  );
};
