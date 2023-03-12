import styled from '@emotion/styled';
import { BsFillPersonPlusFill } from 'react-icons/bs';

export const ButtonAddStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #1976d2;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  border: none;
  padding: 6px 16px;
  border-radius: 4px;
  min-width: 150px;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
`;

export const AddIcon = styled(BsFillPersonPlusFill)`
  margin-right: 20px;
  width: 20px;
  height: 20px;
  fill: #fff;
`;
