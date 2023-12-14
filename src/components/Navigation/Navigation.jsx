import UserIcon from '../user-icon-svg-component/User-icon-svg';
import {
  NavContainerStyled,
  SignStyled,
  SpanStyled,
} from './Navigation.styled';

const Navigation = () => {
  return (
    <NavContainerStyled>
      <SignStyled to="/signin">Sign in</SignStyled>
      <SpanStyled> / </SpanStyled>
      <SignStyled to="/signup">Sign up</SignStyled>
      <UserIcon />
    </NavContainerStyled>
  );
};
export default Navigation;
