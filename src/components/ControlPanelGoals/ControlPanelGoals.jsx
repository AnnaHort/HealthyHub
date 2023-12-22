import { useState } from 'react';
import {
  Container,
  Description,
  IconButton,
  ImgBox,
  ModalContainer,
  SelectPanel,
  StyledArrowDown,
  StyledArrowRight,
  Title,
} from './ControlPanelGoals.styled';
import { TargetSelectionModal } from '../TargetSelectionModal/TargetSelectioModal';
import { ReactComponent as ArrowRigth } from '../../img/Header/arrow-right.svg';
import { ReactComponent as ArrowDown } from '../../img/Header/arrow-down.svg';

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
            <StyledArrowDown onClick={handleIconButtonClick}>
              <ArrowDown />
            </StyledArrowDown>

            <StyledArrowRight onClick={handleIconButtonClick}>
              <ArrowRigth />
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
