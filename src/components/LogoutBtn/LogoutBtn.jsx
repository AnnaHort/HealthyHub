import { ButtonLogout, Div, StyledIcon } from './LogoutBtn.styled';
import IconLogout from '../../Sprites/icons/symbol-defs.svg#icon-logout';

const LogoutBtn = () => {
  return (
    <Div>
      <ButtonLogout>
        <StyledIcon>
          <use
            xlinkHref={`${IconLogout}#icon-logout`}
            width="100%"
            height="100%"
          ></use>
        </StyledIcon>
        Log out
      </ButtonLogout>
    </Div>
  );
};

export default LogoutBtn;
