import { useState } from 'react';
import {
  Container,
  Description,
  IconButton,
  // Img,
  // ImgArrowDown,
  // ImgArrowRight,
  ImgBox,
  ModalContainer,
  SelectPanel,
  StyledArrowDown,
  StyledArrowRight,
  Title,
} from './ControlPanelGoals.styled';
import { TargetSelectionModal } from '../TargetSelectionModal/TargetSelectioModal';

import sprite from '../../iconSpite';

import GainMuscle from '../../Emoji/GainMuscle.svg';

const ControlPanelGoals = () => {
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
        <img src={GainMuscle} alt="GainMuscle" />
      </ImgBox>
      <SelectPanel>
        <Title>Goal</Title>
        <Description>
          Lose fat
          <IconButton>
            {/* <ImgArrowDown
              src="/src/components/ControlPanelGoals/Img/arrow-down-min.svg"
              alt="Arrow bown"
              />
              <ImgArrowRight
              src="/src/components/ControlPanelGoals/Img/arrow-right-min.svg"
              alt="Arrow right"
            /> */}

            <StyledArrowDown onClick={handleIconButtonClick}>
              <use href="/src/Sprites/icons/symbol-defs.svg#icon-arrow-down"></use>
            </StyledArrowDown>
            <StyledArrowRight onClick={handleIconButtonClick}>
              <use href={`${sprite}#icon-arrow-right-2`}></use>
            </StyledArrowRight>
          </IconButton>
        </Description>
      </SelectPanel>

      {isModalOpen && (
        <ModalContainer>
          <TargetSelectionModal onCloseButtonClick={handleCloseButtonClick} />
        </ModalContainer>
      )}
    </Container>
  );
};

export default ControlPanelGoals;
