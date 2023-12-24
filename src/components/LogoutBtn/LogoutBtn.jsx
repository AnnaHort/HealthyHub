import { ButtonLogout, Div, StyledIcon } from './LogoutBtn.styled';
import { ReactComponent as Logout } from '../../img/Header/logout.svg';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await dispatch(logOut());
      navigate('/signin');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <Div>
      <ButtonLogout onClick={handleLogout}>
        <StyledIcon>
          <Logout />
        </StyledIcon>
        Log out
      </ButtonLogout>
    </Div>
  );
};

export default LogoutBtn;
