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
// import Avatar from '../../Emoji/Avatar.svg';
import axios from 'axios';
import { UserInformationImg } from '../../pages/ProfileSettingsPage/UserInformationComponent/UserInformation.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUpdateUserStatus } from '../../redux/updateUser/updateSelectors';
import { getCurrentUser } from '../../redux/updateUser/updateOperations';

const UserInfoNav = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [userData, setUserData] = useState();
  const userUpdate = useSelector(selectUpdateUserStatus);
  const dispatch = useDispatch()


  useEffect(() => {
    if (userUpdate) {
      dispatch(getCurrentUser());
    }
  }, [userUpdate, dispatch]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('api/user/current');
        setUserData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Data error', error.message);
      }
    };
    fetchData();
  }, [userUpdate]); 
  


  const handleIconButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseButtonClick = () => {
    setModalOpen(false);
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  const { name, avatarURL } = userData;

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
        <ModalContainer onClick={handleCloseButtonClick}>
          <UserInfoModal />
        </ModalContainer>
      )}
    </UserInfoContainer>
  );
};

export default UserInfoNav;
