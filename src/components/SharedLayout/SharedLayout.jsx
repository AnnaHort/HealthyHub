import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { HeaderBg, HeaderContainerStyled } from '../Header/Header.styled';
import { Suspense } from 'react';

import { Container } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <HeaderBg>
        <HeaderContainerStyled>
          <Header />
        </HeaderContainerStyled>
      </HeaderBg>
    <Container>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
    </>
  );
};
export default SharedLayout;
