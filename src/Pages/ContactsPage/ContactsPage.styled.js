import styled from '@emotion/styled';
import { BsFillPersonPlusFill } from 'react-icons/bs';

export const ContactsContainer = styled.div`
  display: flex;
  min-height: 800px;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  border: none;
  border-radius: 4px;
  margin-bottom: 30px;
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 40px;
`;

export const ButtonAdd = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
  height: 50px;
  border: none;
  background-color: #0824af;
  border-radius: 4px;
  padding: 35px;
  color: #81cbee;
  font-family: sans-serif;
  font-size: 30px;
  font-weight: bold;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const AddIcon = styled(BsFillPersonPlusFill)`
  margin-right: 20px;
  width: 50px;
  height: 50px;
  fill: #81cbee;
`;
