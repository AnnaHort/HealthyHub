import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { HeaderContainerStyled } from '../Header/Header.styled';
import { Suspense } from 'react';
import { YourGoal } from '../YourGoal/YourGoal';

const SharedLayout = () => {
  return (
    <>
      <header>
        <HeaderContainerStyled>
          <Header />
        </HeaderContainerStyled>
      </header>
      <YourGoal />
      <YourGoal />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout;
