import { useEffect } from 'react';

import EditProfileBtn from '../EditProfileBtn/EditProfileBtn';
import LogoutBtn from '../LogoutBtn/LogoutBtn';
import {
  CloseButton,
  ComponentBlock,
  ModalContainer,
  Backdrop,
  ModalLayout,
} from './UserInfoModal.style';
import { ReactComponent as CloseCircle } from '../../img/Header/close-circle.svg';

const UserInfoModal = ({ onClick }) => {
  const handleCloseModal = (e) => {
    (e.code === 'Escape' || e.currentTarget === e.target) && onClick();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);
    return () => {
      window.removeEventListener('keydown', handleCloseModal);
    };
  });

  return (
    <Backdrop onClick={handleCloseModal}>
      <ModalLayout>
        <ModalContainer>
          <CloseButton>
            <CloseCircle onClick={onClick} />
          </CloseButton>
          <ComponentBlock>
            <EditProfileBtn />
            <LogoutBtn />
          </ComponentBlock>
        </ModalContainer>
        </ModalLayout>
    </Backdrop>
  );
};

export default UserInfoModal;
