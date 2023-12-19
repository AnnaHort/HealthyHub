import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { HeaderContainerStyled } from '../Header/Header.styled';
import { Suspense } from 'react';
import UserInfoNav from '../UserInfoNav/UserInfoNav';

const SharedLayout = () => {
  return (
    <div>
      <header>
        <HeaderContainerStyled>
          <Header />
        </HeaderContainerStyled>
      </header>
      <UserInfoNav />

      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
