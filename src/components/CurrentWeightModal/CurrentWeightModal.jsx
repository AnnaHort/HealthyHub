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
  Backdrop,
  ModalLayout,
  MobileContainer,
} from './CurrentWeightModal.styled';
import { ReactComponent as CloseCircle } from '../../img/Header/close-circle.svg';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {
  setUpdateUserFalse,
  updateUser,
} from '../../redux/updateUser/updateOperations';

const CurrentWeightModal = ({ onCloseButtonClick }) => {
  const [weight, setWeight] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUserData = {
      weight,
    };

    try {
      const response = await axios.put('/api/user/update', newUserData);
      toast.success(response.data.message, { autoClose: 2000 });
      dispatch(updateUser(newUserData));
      dispatch(setUpdateUserFalse());
      onCloseButtonClick();
    } catch (error) {
      console.error('Data error', error.message);
      toast.error('Error updating user information');
    }
  };

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

  const currentDate = new Date().toLocaleDateString();

  return (
    <Backdrop onClick={handleCloseModal}>
      <ModalLayout>
        <Container>
          <MobileContainer>
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
              <BtnConfirm type="submit">Confirm</BtnConfirm>
              <BtnCancel onClick={onCloseButtonClick}>Cancel</BtnCancel>
            </FormContainer>

          </MobileContainer>
        </Container>
      </ModalLayout>
    </Backdrop>
  );
};

export default CurrentWeightModal;
