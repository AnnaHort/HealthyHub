import { useState } from 'react';
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

const ControlPanelWeight = () => {
  const [isModalOpen, setModalOpen] = useState(false);

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
          48 <span>kg</span>
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
