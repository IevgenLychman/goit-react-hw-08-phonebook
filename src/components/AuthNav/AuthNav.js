import { Div, AuthNavLinkStyled } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Div>
      <AuthNavLinkStyled to="/login">Log in</AuthNavLinkStyled>
      <AuthNavLinkStyled to="/register">Sign up</AuthNavLinkStyled>
    </Div>
  );
};

export const GoToContacts = () => {
  return (
    <Div>
      <AuthNavLinkStyled to="/contacts">Contacts</AuthNavLinkStyled>
    </Div>
  );
};
