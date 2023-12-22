import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import { Container } from './Header.styled';

const Header = () => {
  return (
    <Container>
      <Logo />
      <Navigation />
    </Container>
  );
};
export default Header;
