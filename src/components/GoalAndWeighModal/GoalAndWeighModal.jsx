import ControlPanelGoals from '../ControlPanelGoals/ControlPanelGoals';
import ControlPanelWeight from '../ControlPanelWeight/ControlPanelWeight';
import {
  CloseButton,
  Container,
  Div,
  ButtonContainer,
  StyledIcon,
} from './GoalAndWeighModal.styled';
import { ReactComponent as CloseCircle } from '../../img/Header/close-circle.svg';

const GoalAndWeighModal = ({ onCloseButtonClick }) => {
  return (
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
  );
};

export default GoalAndWeighModal;
