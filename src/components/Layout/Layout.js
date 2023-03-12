import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <Container>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};
