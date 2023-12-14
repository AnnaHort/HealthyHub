import { NavLink } from "react-router-dom";
import {BSignIn} from "./button.styled"

const ButtonSignIn = () => {
     console.log('ButtonSignIn is rendering');
    return (
      <div>
        <BSignIn>
          <NavLink to="/signin" />
          Sing In
        </BSignIn>
      </div>
    );
};

export default ButtonSignIn;