import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
        <NavLink>Sign in </NavLink>
        <span> / </span>
        <NavLink>Sign up</NavLink>
    </nav>
  )
};
export default Navigation;
