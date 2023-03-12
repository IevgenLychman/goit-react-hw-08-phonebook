import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Aside, ContactsContainer } from './ContactsPage.styled';
import { ButtonAdd } from 'components/ButtonAdd/ButtonAdd';
import { Modal } from 'components/Modal/Modal';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

const ContactsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Grid component="main">
      <CssBaseline />
      <Header />
      <ContactsContainer>
        <Aside>
          <ButtonAdd openModal={setIsModalOpen} />
          <Filter />
        </Aside>
        <ContactList />
        <Outlet />
        {isModalOpen && <Modal closeModal={setIsModalOpen} />}
      </ContactsContainer>
      <Footer />
    </Grid>
  );
};

export default ContactsPage;
