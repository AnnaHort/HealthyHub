import {
  ButtonLogout,
  Div,
  StyledIcon,
} from '../EditProfileBtn/EditProfileBtn.styled';
import { ReactComponent as Settings } from '../../img/Header/setting-2.svg';

const EditProfileBtn = () => {
  return (
    <Div>
      <ButtonLogout>
        <StyledIcon>
          <Settings />
        </StyledIcon>
        Setting
      </ButtonLogout>
    </Div>
  );
};

export default EditProfileBtn;
