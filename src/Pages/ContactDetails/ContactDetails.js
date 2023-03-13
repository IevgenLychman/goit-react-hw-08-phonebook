import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsContainer, Text } from './ContactDetails.styled';
import { getContacts } from 'redux/contacts/selectors';

const ContactDetails = () => {
  const { id } = useParams();
  const contacts = useSelector(getContacts);

  const contact = contacts.find(contact => contact.id === id);

  return (
    <DetailsContainer>
      <Text>Name: {contact.name}</Text>
      <Text>Phone: {contact.number}</Text>
    </DetailsContainer>
  );
};

export default ContactDetails;
