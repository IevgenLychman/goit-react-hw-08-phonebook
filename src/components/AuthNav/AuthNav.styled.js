import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Div = styled.div`
  display: flex;
`;

export const AuthNavLinkStyled = styled(NavLink)`
  display: flex;
  justify-content: center;
  color: #fff;
  background-color: #1976d2;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  padding: 6px 16px;
  border-radius: 4px;
  min-width: 150px;

  &:not(:last-child) {
    margin-right: 30px;
  }
`;
