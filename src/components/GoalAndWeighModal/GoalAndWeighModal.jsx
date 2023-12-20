import ControlPanelGoals from '../ControlPanelGoals/ControlPanelGoals';
import ControlPanelWeight from '../ControlPanelWeight/ControlPanelWeight';
import {
  CloseButton,
  Container,
  Img,
  Div,
  ButtonContainer,
} from './GoalAndWeighModal.styled';

const GoalAndWeighModal = ({ onCloseButtonClick }) => {
  return (
    <Container>
      <Div>
        <ControlPanelGoals />
        <ControlPanelWeight />
      </Div>
      <ButtonContainer>
        <CloseButton onClick={onCloseButtonClick}>
          <Img
            src="/src/components/TargetSelectionModal/img/close-circle-min.svg"
            alt="CloseButton"
          />
        </CloseButton>
      </ButtonContainer>
    </Container>
  );
};

export default GoalAndWeighModal;
