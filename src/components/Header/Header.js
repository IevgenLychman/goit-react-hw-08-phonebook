import {
  HeaderStyled,
  HeaderTitle,
  Button,
  User,
  UserName,
} from './Header.styled';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { getUser } from 'redux/auth/selectors';

export const Header = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  return (
    <HeaderStyled>
      <HeaderTitle>Phonebook</HeaderTitle>
      <User>
        <UserName>{user.name}</UserName>
        <Button onClick={() => dispatch(logOut())}>Log out</Button>
      </User>
    </HeaderStyled>
  );
};
