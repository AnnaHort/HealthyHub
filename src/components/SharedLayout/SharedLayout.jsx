import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { HeaderBg, HeaderContainerStyled } from '../Header/Header.styled';
import { Suspense } from 'react';
import HeaderAuthorizedUser from '../HeaderAuthorizedUser/HeaderAuthorizedUser';
import { useSelector } from 'react-redux';
import selectIsLoggedIn from '../../redux/auth/authSelectors';

import { Container } from './SharedLayout.styled';

const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <HeaderBg>
        <HeaderContainerStyled>
          {isLoggedIn ? <HeaderAuthorizedUser /> : <Header />}
        </HeaderContainerStyled>
      </HeaderBg>
    
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
    </>
  );
};
export default SharedLayout;
