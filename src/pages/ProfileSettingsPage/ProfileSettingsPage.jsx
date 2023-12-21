// import ProfileSettingImg from './ProfileSettingImg';
import {
  Img,
  ProfileSettingsPageContainer,
  // ProfileSettingsPageImg,
  ProfileSettingsPageTitle,
} from './ProfileSettingsPage.styled';
import UserInformation from './UserInformationComponent/UserInformation';
import { ReactComponent as Images } from '../../img/YourActivityImg/Illustration.svg';

const ProfileSettingsPage = () => {
  return (
    <ProfileSettingsPageContainer>
      <div>
        <ProfileSettingsPageTitle>Profile setting</ProfileSettingsPageTitle>
        {/* <ProfileSettingsPageImg src="/src/img/ProfileSettingPagesImg/Illustration.png" /> */}
        <Img>
          <Images />
        </Img>
      </div>

      <UserInformation />
    </ProfileSettingsPageContainer>
  );
};
export default ProfileSettingsPage;
