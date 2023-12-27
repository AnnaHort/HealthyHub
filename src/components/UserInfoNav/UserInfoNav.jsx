import { useEffect, useState } from 'react';
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

import { UserInformationImg } from '../../pages/ProfileSettingsPage/UserInformationComponent/UserInformation.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUpdateUserStatus, selectUser } from '../../redux/updateUser/updateSelectors';
import { getCurrentUser } from '../../redux/updateUser/updateOperations';

const UserInfoNav = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  // чи відбулося оновлення юзера
  const userUpdate = useSelector(selectUpdateUserStatus);

    // отримати дані юзера
    const currentUserData = useSelector(selectUser);
    const name = currentUserData ? currentUserData.name : null;
    const avatarURL = currentUserData ? currentUserData.avatarURL : null
  const dispatch = useDispatch();

  useEffect(() => {
    if (userUpdate) {
      dispatch(getCurrentUser());
    }
  }, [userUpdate, dispatch]);

  const handleIconButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseButtonClick = () => {
    setModalOpen(false);
  };


  return (
    <UserInfoContainer>
      <Text>{name}</Text>
      <ImgContainer>
        <UserInformationImg
          src={avatarURL}
          alt="Avatar"
          style={{ borderRadius: '50%' }}
        />
      </ImgContainer>

      <IconButton onClick={handleIconButtonClick}>
        <StyledIcon>
          <ArrowDown />
        </StyledIcon>
      </IconButton>

      {isModalOpen && (
        <ModalContainer>
          <UserInfoModal onClick={handleCloseButtonClick} />
        </ModalContainer>
      )}
    </UserInfoContainer>
  );
};

export default UserInfoNav;
