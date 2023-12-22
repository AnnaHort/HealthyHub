import EditProfileBtn from '../EditProfileBtn/EditProfileBtn';
import LogoutBtn from '../LogoutBtn/LogoutBtn';
import { ComponentBlock, ModalContainer } from './UserInfoModal.style';

const UserInfoModal = () => {
  return (
    <ModalContainer>
      <ComponentBlock>
        <EditProfileBtn />
        <LogoutBtn />
      </ComponentBlock>
    </ModalContainer>
  );
};

export default UserInfoModal;
