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
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const CurrentWeightModal = ({ onCloseButtonClick }) => {
  const [weight, setWeight] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUserData = {
      weight,
    };
    try {
      const response = await axios.put('/api/user/update', newUserData);
      console.log(response.data);
      toast.success(response.data.message);
    } catch (error) {
      console.error('Data error', error.message);
      toast.error('Error updating user information');
    }
  };

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

      <FormContainer onSubmit={handleSubmit}>
        <Input
          type="number"
          placeholder="Enter your weight"
          min="1"
          max="300"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <BtnConfirm type='submit' >
          Confirm
        </BtnConfirm>
        <BtnCancel onClick={onCloseButtonClick}>Cancel</BtnCancel>
      </FormContainer>
      <ToastContainer position="top-right"/>
    </Container>
  );
};

export default CurrentWeightModal;
