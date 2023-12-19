import { ButtonLogout, Div, StyledIcon } from '../LogoutBtn/LogoutBtn.styled';

const EditProfileBtn = () => {
  return (
    <Div>
      <ButtonLogout>
        <StyledIcon>
          <use href="/src/Sprites/icons/symbol-defs.svg#icon-setting-2"></use>
        </StyledIcon>
        Setting
      </ButtonLogout>
    </Div>
  );
};

export default EditProfileBtn;
