import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { HeaderContainerStyled } from '../Header/Header.styled';
import { Suspense } from 'react';
import GoalAndWeighModal from '../GoalAndWeighModal/GoalAndWeighModal';

const SharedLayout = () => {
  return (
    <div>
      <header>
        <HeaderContainerStyled>
          <Header />
        </HeaderContainerStyled>
      </header>
      <GoalAndWeighModal />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
