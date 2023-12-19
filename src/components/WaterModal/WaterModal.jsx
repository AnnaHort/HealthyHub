import {
  BtnCancel,
  BtnConfirm,
  Container,
  Input,
  Text,
  Title,
} from './WaterModal.styled';

const WaterModal = () => {
  return (
    <Container>
      <Title>Add water intake</Title>
      <Text>How much water</Text>
      <Input type="text" placeholder="Enter your weight" />
      <BtnConfirm>Confirm</BtnConfirm>
      <BtnCancel>Cancel</BtnCancel>
    </Container>
  );
};

export default WaterModal;
