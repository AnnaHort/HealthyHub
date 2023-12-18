import {
  BtnCancel,
  BtnConfirm,
  CloseButton,
  Container,
  Description,
  Div,
  FormContainer,
  Img,
  Input,
  SpanData,
  Text,
  Title,
} from './СurrentWeightModal.styled';

const СurrentWeightModal = () => {
  const currentDate = new Date().toLocaleDateString();
  return (
    <Container>
      <Div>
        <Title>Enter your current weight</Title>
        <CloseButton>
          <Img
            src="/src/components/СurrentWeightModal/close-circle-min.svg"
            alt="CloseButton"
          />
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

export default СurrentWeightModal;
