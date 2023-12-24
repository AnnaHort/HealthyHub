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
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectUpdateUserStatus } from '../../redux/updateUser/updateSelectors';
import { setUpdateUserFalse, updateUser } from '../../redux/updateUser/updateOperations';

const CurrentWeightModal = ({ onCloseButtonClick }) => {
  const [weight, setWeight] = useState('');
  const [userData, setUserData] = useState();

  const userUpdate = useSelector(selectUpdateUserStatus);
  const dispatch = useDispatch()

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
    } catch (error) {
      console.error('Data error', error.message);
        toast.error('Error updating user information');
    }
  }
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('api/user/current');
        setUserData(response.data);
      } catch (error) {
        console.error('Data error', error.message);
      }
    };
    fetchData();
  }, [userUpdate]);

  const currentDate = new Date().toLocaleDateString();
  
  if (!userData) {
    return <div>Loading...</div>;
  }
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
        <BtnConfirm type='submit'>
          Confirm
        </BtnConfirm>
        <BtnCancel onClick={onCloseButtonClick}>Cancel</BtnCancel>
      </FormContainer>
      <ToastContainer position="top-right"/>
    </Container>
  );
};

export default CurrentWeightModal;
