import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logOut } from '../../redux/auth/authOperations';
import { Link, useNavigate } from 'react-router-dom';

import { ReactComponent as ArrowRigth } from '../../img/MainPages/arrow-right.svg';

import { DailyGoal } from './DailyGoal';
import { Water } from './Water/Water';
import DiaryBlock from './DiaryBlock/DiaryBlock';

import {
  MainContainer,
  MainTitle,
  MainLinkToGoal,
  MainText,
  MainWrapperTitle,
  MainElementsWrapper,
  DARFWrap,
} from './MainPage.styled';
import RecommendedFoodMain from '../../components/RecommendedFood.jsx/RecommendedFoodMain';

const MainPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const toggleIsOpenModal = () => {
    setIsOpenModal((isOpenModal) => !isOpenModal);
  };

  let dailyCalories = 1700;
  let waterConsumtion = 800;

  
  const handleLogout = async () => {
    try {
      await dispatch(logOut());
      navigate('/signin');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <>
      <MainContainer>
        <MainWrapperTitle>
          <MainTitle>Today</MainTitle>
          <MainLinkToGoal to="dashboard">
            <MainText>On the way to the goal</MainText>
            <ArrowRigth />
          </MainLinkToGoal>
        </MainWrapperTitle>
        <MainElementsWrapper>
          <DailyGoal dailyCalories={dailyCalories} />
          <Water
            handleModal={toggleIsOpenModal}
            waterConsumtion={waterConsumtion}
          />
          <DiaryBlock />
        </MainElementsWrapper>
        <DARFWrap></DARFWrap>
        <RecommendedFoodMain />
      </MainContainer>
      <Link to="/signin" onClick={handleLogout}>
        Logout
      </Link>
    </>
  );
};

export default MainPage;
