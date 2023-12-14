import { NavLink } from "react-router-dom";
import {BSignOut} from "./button.styled"

const ButtonSignUp = () => {
    console.log('ButtonSignUp is rendering');
    return (
      <div>
        <BSignOut>
          <NavLink to="signup" />
          Sing Out
        </BSignOut>
      </div>
    );
}

export default ButtonSignUp;