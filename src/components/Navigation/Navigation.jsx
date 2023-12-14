import { NavLink } from "react-router-dom";
import UserIconSvg from "../user-icon-svg-component/user-icon-svg";
import { NavContainerStyled } from "./Navigation.styled";

const Navigation = () => {
  return (
    <NavContainerStyled>
        <NavLink>Sign in </NavLink>
        <span> / </span>
        <NavLink>Sign up</NavLink>
        <UserIconSvg/>
    </NavContainerStyled>
  )
};
export default Navigation;
