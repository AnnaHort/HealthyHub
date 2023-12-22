import { useEffect, useState } from 'react';
import axios from 'axios';
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

axios.defaults.baseURL = 'https://healthhub-backend.onrender.com';

const ControlPanelWeight = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('api/user/current');
        setUserData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleIconButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseButtonClick = () => {
    setModalOpen(false);
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <ImgBox>
        <img src={MaintakeMen} alt="MaintakeMen" />
      </ImgBox>
      <SelectPanel>
        <Title>Weight</Title>
        <Description>
          {userData.weight} <span>kg</span>
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
