import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/authOperations";
import { Link, useNavigate } from "react-router-dom";

const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await dispatch(logOut());
      navigate("/signin");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <Link to="/signin" onClick={handleLogout}>
      Logout
    </Link>
  );
};

export default MainPage;

