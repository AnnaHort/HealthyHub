import { NavLink } from "react-router-dom";
import {BSignOut} from "./button.styled"

const ButtonSignUp = () => {
    console.log('ButtonSignUp is rendering');
    return (
      <>
        <BSignOut>
          <NavLink to="signup" />
          Sing Out
        </BSignOut>
      </>
    );
}

export default ButtonSignUp;