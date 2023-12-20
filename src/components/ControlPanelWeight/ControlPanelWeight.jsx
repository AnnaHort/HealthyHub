import { useState } from 'react';
import {
  Container,
  Description,
  IconButton,
  Img,
  ImgBox,
  ModalContainer,
  SelectPanel,
  StyledIcon,
  Title,
} from './ControlPanelWeight.styled';
import CurrentWeightModal from '../СurrentWeightModal/СurrentWeightModal';

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
        <Img src="/src/Emoji/WaightImage.svg" alt="Waiting image" />
      </ImgBox>
      <SelectPanel>
        <Title>Weight</Title>
        <Description>
          48 <span>kg</span>
          <IconButton onClick={handleIconButtonClick}>
            {/* <img
              src="/src/components/ControlPanelWeight/img/edit-2-min.svg"
              alt="Edit"
            /> */}

            <StyledIcon>
              <use href="/src/Sprites/icons/symbol-defs.svg#icon-edit-2"></use>
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
