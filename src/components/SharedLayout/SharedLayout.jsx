import Header from '../Header/Header';
import { HeaderContainerStyled } from '../Header/Header.styled';

const SharedLayout = () => {
  return (
    <header>
      <HeaderContainerStyled>
        <Header />
      </HeaderContainerStyled>
    </header>
  );
};
export default SharedLayout;
