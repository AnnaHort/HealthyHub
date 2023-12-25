import {
  Form,
  List,
  RadioItem,
  CustomRadio,
  Label,
  Container,
  Title,
  Description,
  BtnConfirm,
  BtnBack,
  CloseButton,
  Div,
  StyledIcon,
  Backdrop,
  ModalLayout,
  MobiletContainer,
} from './TargetSelectionModal.styled';
import { ReactComponent as CloseCircle } from '../../img/Header/close-circle.svg';
import LooseFatMen from '../../Emoji/LoseFatMen.svg';
import MaintakeGirl from '../../Emoji/MaintakeGirl.svg';
import GainMuscle from '../../Emoji/GainMuscle.svg';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { selectUpdateUserStatus } from '../../redux/updateUser/updateSelectors';
import {
  setUpdateUserFalse,
  updateUser,
} from '../../redux/updateUser/updateOperations';
import { useEffect, useState } from 'react';

axios.defaults.baseURL = 'https://healthhub-backend.onrender.com';

export const TargetSelectionModal = ({ onCloseButtonClick }) => {
  const [goal, setGoal] = useState('');
  const [userData, setUserData] = useState();

  const userUpdate = useSelector(selectUpdateUserStatus);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUserData = {
      goal,
    };

    try {
      const response = await axios.put('/api/user/update', newUserData);
      dispatch(updateUser(newUserData));
      dispatch(setUpdateUserFalse());
      toast.success(response.data.message, { autoClose: 2000 });
      onCloseButtonClick();
      return response.data;
    } catch (error) {
      console.error('Data error', error.message);
      toast.error('Error updating user information');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('api/user/current');
        console.log(response.data.goal);
        setGoal(response.data.goal);
        setUserData(response.data);
      } catch (error) {
        console.error('Data error', error.message);
      }
    };
    fetchData();
  }, [userUpdate]);

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

  if (!userData) {
    return <div>Loading...</div>;
  }
  return (
    <Backdrop onClick={handleCloseModal}>
      <ModalLayout>
        <Container>
          <MobiletContainer>
            <Div>
              <Title>Target selection</Title>
              <CloseButton onClick={onCloseButtonClick}>
                <StyledIcon>
                  <CloseCircle />
                </StyledIcon>
              </CloseButton>
            </Div>
            <Description>
              The service will adjust your calorie intake to your goal
            </Description>
            <Form onSubmit={handleSubmit}>
              <List>
                <RadioItem>
                  <CustomRadio
                    type="radio"
                    id="loseFat"
                    name="goal"
                    value="Lose Fat"
                    checked={goal === 'Lose fat'}
                    onChange={() => setGoal('Lose fat')}
                  />
                  <Label htmlFor="loseFat">
                    <img src={LooseFatMen} alt="LooseFatMen" />
                    Lose Fat
                  </Label>
                </RadioItem>
                <RadioItem>
                  <CustomRadio
                    type="radio"
                    id="maintain"
                    name="goal"
                    value="Maintain"
                    checked={goal === 'Maintain'}
                    onChange={() => setGoal('Maintain')}
                  />
                  <Label htmlFor="maintain">
                    <img src={MaintakeGirl} alt="MaintakeGirl" />
                    Maintain
                  </Label>
                </RadioItem>
                <RadioItem>
                  <CustomRadio
                    type="radio"
                    id="gainMuscle"
                    name="goal"
                    value="Gain Muscle"
                    checked={goal === 'Gain Muscle'}
                    onChange={() => setGoal('Gain Muscle')}
                  />
                  <Label htmlFor="gainMuscle">
                    <img src={GainMuscle} alt="GainMuscle" />
                    Gain Muscle
                  </Label>
                </RadioItem>
              </List>
              <BtnConfirm type="submit">Submit</BtnConfirm>
            </Form>
            <BtnBack onClick={onCloseButtonClick}>Back</BtnBack>
          </MobiletContainer>
        </Container>
      </ModalLayout>
    </Backdrop>
  );
};
