import { NavLink } from "react-router-dom";

const ButtonSignUp = () => {
    console.log('ButtonSignUp is rendering');
    return (
      <div>
        <button>
          <NavLink to="signup" />
        </button>
      </div>
    );
}

export default ButtonSignUp;