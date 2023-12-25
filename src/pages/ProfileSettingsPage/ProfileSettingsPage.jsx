import {
  ProfileSettingsPageContainer,
  ProfileSettingsPageImg,
  ProfileSettingsPageTitle,
} from './ProfileSettingsPage.styled';
import UserInformation from './UserInformationComponent/UserInformation';
import { ReactComponent as Images } from '../../img/YourActivityImg/Illustration.svg';

const ProfileSettingsPage = () => {
  return (
    <ProfileSettingsPageContainer>
      <div>
        <ProfileSettingsPageTitle>Profile setting</ProfileSettingsPageTitle>
        <ProfileSettingsPageImg>
          <Images />
        </ProfileSettingsPageImg>
      </div>

      <UserInformation />
    </ProfileSettingsPageContainer>
  );
};
export default ProfileSettingsPage;
