import {
  ButtonSetting,
  Div,
  StyledIcon,
} from '../EditProfileBtn/EditProfileBtn.styled';
import { ReactComponent as Settings } from '../../img/Header/setting-2.svg';
import { Link } from 'react-router-dom';

const EditProfileBtn = () => {
  return (
    <Div>
      <Link to="/settings">
        <ButtonSetting>
          <StyledIcon>
            <Settings />
          </StyledIcon>
          Setting
        </ButtonSetting>
      </Link>
    </Div>
  );
};

export default EditProfileBtn;
