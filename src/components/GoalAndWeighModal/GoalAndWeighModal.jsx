import { useEffect } from 'react';

import ControlPanelGoals from '../ControlPanelGoals/ControlPanelGoals';
import ControlPanelWeight from '../ControlPanelWeight/ControlPanelWeight';
import {
  CloseButton,
  Container,
  Div,
  ButtonContainer,
  StyledIcon,
  Backdrop,
  ModalLayout,
} from './GoalAndWeighModal.styled';
import { ReactComponent as CloseCircle } from '../../img/Header/close-circle.svg';

const GoalAndWeighModal = ({ onCloseButtonClick }) => {
  const handleCloseModal = (e) => {
    (e.code === 'Escape' || e.currentTarget === e.target) &&
      onCloseButtonClick();
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
        <Container>
          <Div>
            <ControlPanelGoals />
            <ControlPanelWeight />
          </Div>
          <ButtonContainer>
            <CloseButton onClick={onCloseButtonClick}>
              <StyledIcon>
                <CloseCircle />
              </StyledIcon>
            </CloseButton>
          </ButtonContainer>
        </Container>
      </ModalLayout>
    </Backdrop>
  );
};

export default GoalAndWeighModal;
