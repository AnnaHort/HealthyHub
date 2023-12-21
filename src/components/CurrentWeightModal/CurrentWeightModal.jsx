import {
  BtnCancel,
  BtnConfirm,
  CloseButton,
  Container,
  Description,
  Div,
  FormContainer,
  Input,
  SpanData,
  StyledIcon,
  Text,
  Title,
} from './CurrentWeightModal.styled';
import { ReactComponent as CloseCircle } from '../../img/Header/close-circle.svg';

const CurrentWeightModal = ({ onCloseButtonClick }) => {
  const currentDate = new Date().toLocaleDateString();
  return (
    <Container>
      <Div>
        <Title>Enter your current weight</Title>
        <CloseButton onClick={onCloseButtonClick}>
          <StyledIcon>
            <CloseCircle />
          </StyledIcon>
        </CloseButton>
      </Div>
      <Description>You can record your weight once a day</Description>

      <Text>
        Today: <SpanData>{currentDate}</SpanData>
      </Text>

      <FormContainer>
        <Input type="text" placeholder="Enter your weight" />
        <BtnConfirm>Confirm</BtnConfirm>
        <BtnCancel>Cancel</BtnCancel>
      </FormContainer>
    </Container>
  );
};

export default CurrentWeightModal;
