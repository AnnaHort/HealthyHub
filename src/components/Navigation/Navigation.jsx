import { NavLink } from 'react-router-dom';
import { NavContainerStyled } from './Navigation.styled';

const Navigation = () => {
  return (
    <NavContainerStyled>
      <NavLink>Sign in </NavLink>
      <span> / </span>
      <NavLink>Sign up</NavLink>
    </NavContainerStyled>
  );
};
export default Navigation;
