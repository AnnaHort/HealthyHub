import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { HeaderContainerStyled } from '../Header/Header.styled';
import { Suspense } from 'react';

const SharedLayout = () => {
 
  return (
    <div>
      <header>
        <HeaderContainerStyled>
          <Header />
        </HeaderContainerStyled>
      </header>

      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
