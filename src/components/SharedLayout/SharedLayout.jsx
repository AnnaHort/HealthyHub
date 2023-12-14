import { Outlet } from 'react-router';
import Header from '../Header/Header';
import { HeaderContainerStyled } from '../Header/Header.styled';

const SharedLayout = () => {
  return (
    <header>
      <HeaderContainerStyled>
        <Header />
      </HeaderContainerStyled>
      <Outlet/>
    </header>
  );
};
export default SharedLayout;
