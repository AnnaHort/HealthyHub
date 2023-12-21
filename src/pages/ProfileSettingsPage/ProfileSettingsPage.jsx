// import ProfileSettingImg from './ProfileSettingImg';
import {
  ProfileSettingsPageContainer,
  ProfileSettingsPageImg,
  ProfileSettingsPageTitle,
} from './ProfileSettingsPage.styled';
import UserInformation from './UserInformationComponent/UserInformation';

const ProfileSettingsPage = () => {
  return (
    <ProfileSettingsPageContainer>
      <div>
        <ProfileSettingsPageTitle>Profile setting</ProfileSettingsPageTitle>
        <ProfileSettingsPageImg src="/src/img/ProfileSettingPagesImg/Illustration.png" />
      </div>

      <UserInformation />
    </ProfileSettingsPageContainer>
  );
};
export default ProfileSettingsPage;
