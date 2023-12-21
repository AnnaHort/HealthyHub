import { useState } from 'react';
import {
  IconButton,
  ImgContainer,
  ModalContainer,
  StyledIcon,
  Text,
  UserInfoContainer,
} from './UserInfoNav.styled';
import UserInfoModal from '../UserInfoModal/UserInfoModal';
import { ReactComponent as ArrowDown } from '../../img/Header/arrow-down.svg';
import Avatar from '../../Emoji/Avatar.svg';

const UserInfoNav = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleIconButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseButtonClick = () => {
    setModalOpen(false);
  };

  return (
    <UserInfoContainer>
      <Text>Konstantin</Text>
      <ImgContainer>
        <img src={Avatar} alt="Avatar" />
      </ImgContainer>

      <IconButton onClick={handleIconButtonClick}>
        <StyledIcon onClick={handleCloseButtonClick}>
          <ArrowDown />
        </StyledIcon>
      </IconButton>

      {isModalOpen && (
        <ModalContainer onClick={handleCloseButtonClick}>
          <UserInfoModal />
        </ModalContainer>
      )}
    </UserInfoContainer>
  );
};

export default UserInfoNav;
