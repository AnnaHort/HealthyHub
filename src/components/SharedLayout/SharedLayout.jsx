import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { Suspense } from 'react';
import HeaderAuthorizedUser from '../HeaderAuthorizedUser/HeaderAuthorizedUser';
import { useSelector } from 'react-redux';
import selectIsLoggedIn from '../../redux/auth/authSelectors';

import { Container, ContainerHeader } from './SharedLayout.styled';


const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <ContainerHeader>
        {isLoggedIn ? <HeaderAuthorizedUser /> : <Header />}
      </ContainerHeader>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
        
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
export default SharedLayout;
