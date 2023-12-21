import {
  ButtonLogout,
  Div,
  StyledIcon,
} from '../EditProfileBtn/EditProfileBtn.styled';
import IconSetting from '../../Sprites/icons/symbol-defs.svg#icon-setting-2';

const EditProfileBtn = () => {
  return (
    <Div>
      <ButtonLogout>
        <StyledIcon>
          <use
            xlinkHref={`${IconSetting}#icon-setting-2`}
            width="100%"
            height="100%"
          ></use>
        </StyledIcon>
        Setting
      </ButtonLogout>
    </Div>
  );
};

export default EditProfileBtn;
