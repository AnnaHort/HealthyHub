import { NavLink } from "react-router-dom";
import {BSignIn} from "./button.styled"

const ButtonSignIn = () => {
    return (
      <>
        <BSignIn as={NavLink} to="/signin">
          Sing In
        </BSignIn>
      </>
    );
};

export default ButtonSignIn;