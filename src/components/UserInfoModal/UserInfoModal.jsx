import EditProfileBtn from '../EditProfileBtn/EditProfileBtn';
import LogoutBtn from '../LogoutBtn/LogoutBtn';
import {
  CloseButton,
  ComponentBlock,
  ModalContainer,
} from './UserInfoModal.style';
import { ReactComponent as CloseCircle } from '../../img/Header/close-circle.svg';

const UserInfoModal = ({ onClick }) => {
  return (
    <ModalContainer>
      <CloseButton>
        <CloseCircle onClick={onClick} />
      </CloseButton>

      <ComponentBlock>
        <EditProfileBtn />
        <LogoutBtn />
      </ComponentBlock>
    </ModalContainer>
  );
};

export default UserInfoModal;
