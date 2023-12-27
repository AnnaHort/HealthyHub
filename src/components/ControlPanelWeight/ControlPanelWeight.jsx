import { useEffect, useState } from 'react';
import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import {fetchCurentUser} from "/src/redux/auth/authOperations.js"
import {
  Container,
  Description,
  IconButton,
  ImgBox,
  ModalContainer,
  SelectPanel,
  StyledIcon,
  Title,
} from './ControlPanelWeight.styled';
import CurrentWeightModal from '../CurrentWeightModal/CurrentWeightModal';

import MaintakeMen from '../../Emoji/WaightImage.svg';
import IconsEditTwo from '../../Icons/IconEditTwo';
import { useDispatch, useSelector } from 'react-redux';
import { selectUpdateUserStatus, selectUser } from '../../redux/updateUser/updateSelectors';
import { getCurrentUser } from '../../redux/updateUser/updateOperations';
import { fetchUserStatsDay } from '../../redux/userStatsDay/operations';

axios.defaults.baseURL = 'https://healthhub-backend.onrender.com';

const ControlPanelWeight = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  // чи відбувалося оновлення 
  const userUpdate = useSelector(selectUpdateUserStatus);
  // отримати дані юзера
  const currentUserData = useSelector(selectUser);
  const weight = currentUserData ? currentUserData.weight : null;
  
  const dispatch = useDispatch();

// якщо юзер оновився то виконати запит отримання даних
  useEffect(() => {
    if (userUpdate) {
      dispatch(getCurrentUser());
      dispatch(fetchUserStatsDay());
    }
  }, [userUpdate, dispatch]);

  const handleIconButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseButtonClick = () => {
    setModalOpen(false);
  };

  return (
    <Container>
      <ImgBox>
        <img src={MaintakeMen} alt="MaintakeMen" />
      </ImgBox>
      <SelectPanel>
        <Title>Weight</Title>
        <Description>
          {weight} <span>kg</span>
          <IconButton onClick={handleIconButtonClick}>
            <StyledIcon>
              <IconsEditTwo />
            </StyledIcon>
          </IconButton>
        </Description>
      </SelectPanel>

      {isModalOpen && (
        <ModalContainer>
          <CurrentWeightModal onCloseButtonClick={handleCloseButtonClick} />
        </ModalContainer>
      )}
    </Container>
  );
};

export default ControlPanelWeight;
