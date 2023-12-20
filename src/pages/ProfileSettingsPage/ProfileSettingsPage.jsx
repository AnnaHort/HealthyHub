import {
  ProfileSettingsPageContainer,
  ProfileSettingsPageImg,
  ProfileSettingsPageTitle,
} from './ProfileSettingsPage.styled';
import UserInformation from './UserInformationComponent/UserInformation';

const ProfileSettingsPage = () => {
  return (

      <ProfileSettingsPageContainer>
        <ProfileSettingsPageTitle>Profile setting</ProfileSettingsPageTitle>

        <ProfileSettingsPageImg src="/src/img/ProfileSettings/ProfileSettings.svg" />

        <UserInformation />
      </ProfileSettingsPageContainer>

  );
};
export default ProfileSettingsPage;
