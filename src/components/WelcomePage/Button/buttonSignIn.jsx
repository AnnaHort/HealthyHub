import { NavLink } from "react-router-dom";

const ButtonSignIn = () => {
     console.log('ButtonSignIn is rendering');
    return (
      <div>
        <button>
          <NavLink to="/signin" />
        </button>
      </div>
    );
};

export default ButtonSignIn;