import { ButtonLogout, Div, StyledIcon } from './LogoutBtn.styled';

const LogoutBtn = () => {
  return (
    <Div>
      <ButtonLogout>
        <StyledIcon>
          <use href="/src/Sprites/icons/symbol-defs.svg#icon-logout"></use>
        </StyledIcon>
        Log out
      </ButtonLogout>
    </Div>
  );
};

export default LogoutBtn;
