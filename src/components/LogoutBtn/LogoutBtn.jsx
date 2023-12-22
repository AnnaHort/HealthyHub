import { ButtonLogout, Div, StyledIcon } from './LogoutBtn.styled';
import { ReactComponent as Logout } from '../../img/Header/logout.svg';

const LogoutBtn = () => {
  return (
    <Div>
      <ButtonLogout>
        <StyledIcon>
          <Logout />
        </StyledIcon>
        Log out
      </ButtonLogout>
    </Div>
  );
};

export default LogoutBtn;
