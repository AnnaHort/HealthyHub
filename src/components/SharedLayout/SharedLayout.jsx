import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { HeaderContainerStyled } from '../Header/Header.styled';
import { Suspense } from 'react';
import DashboardPage from '../../pages/DashboardPage/dashboardPage';

const SharedLayout = () => {
  return (
    <div>
      <header>
        <HeaderContainerStyled>
          <Header />
        </HeaderContainerStyled>
      </header>

      <DashboardPage/>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
