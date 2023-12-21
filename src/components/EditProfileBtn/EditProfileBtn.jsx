import {
  ButtonLogout,
  Div,
  StyledIcon,
} from '../EditProfileBtn/EditProfileBtn.styled';

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
