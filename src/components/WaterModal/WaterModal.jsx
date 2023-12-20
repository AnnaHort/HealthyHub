import {
  BtnCancel,
  BtnConfirm,
  Container,
  FormBox,
  Input,
  Text,
  Title,
} from './WaterModal.styled';

const WaterModal = () => {
  return (
    <Container>
      <Title>Add water intake</Title>
      <FormBox>
        <Text>How much water</Text>
        <Input type="text" placeholder="Enter your weight" />
        <BtnConfirm>Confirm</BtnConfirm>
        <BtnCancel>Cancel</BtnCancel>
      </FormBox>
    </Container>
  );
};

export default WaterModal;
