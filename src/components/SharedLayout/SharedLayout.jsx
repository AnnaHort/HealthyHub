import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import { HeaderContainerStyled } from '../Header/Header.styled';
import { Suspense } from 'react';
import HeaderAuthorizedUser from '../HeaderAuthorizedUser/HeaderAuthorizedUser';
import { useSelector } from 'react-redux';
import selectIsLoggedIn from '../../redux/auth/authSelectors';

const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <header>
        <HeaderContainerStyled>
          {isLoggedIn ? <HeaderAuthorizedUser /> : <Header />}
        </HeaderContainerStyled>
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
