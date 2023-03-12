import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  border: none;
  padding: 6px 16px;
  border-radius: 4px;
  margin-bottom: 30px;
`;

export const HeaderTitle = styled.h2`
  margin: 0;
  font-weight: 300;
  font-size: 3.75rem;
  line-height: 1.2;
`;
export const User = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.p`
  margin: 0;
  margin-right: 10px;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.6;
  letter-spacing: 0.0075em;
`;

export const Button = styled.button`
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
