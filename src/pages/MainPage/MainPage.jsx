import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { logOut } from '../../redux/auth/authOperations';
// import { Link, useNavigate } from 'react-router-dom';

import { ReactComponent as ArrowRigth } from '../../img/MainPages/arrow-right.svg';

import { DailyGoal } from './DailyGoal';
import { Water } from './Water/Water';
import DiaryBlock from './DiaryBlock/DiaryBlock';
import { FoodInfo } from './Food/Food';
import { AddWaterModal } from '../../components/MainPage/AddWaterModal';

import { fetchUserStatsDay } from '../../redux/userStatsDay/operations';
import {
  getCaloriesDayilyNorma,
  getCaloriesAmount,
  getWaterDailyNorma,
  getwaterAmount,
  getUserStatsLoad,
} from '../../redux/userStatsDay/selectors';

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
  const userStatsDayLoad = useSelector(getUserStatsLoad);
  const dailyCalories = useSelector(getCaloriesDayilyNorma);
  const amountCalories = useSelector(getCaloriesAmount);
  const dailyWaterL = useSelector(getWaterDailyNorma);
  const waterAmount = useSelector(getwaterAmount);
  const dispatch = useDispatch();

  let dailyWaterMl = 0;
  dailyWaterL ? (dailyWaterMl = dailyWaterL.toFixed(2) * 1000) : 1500;

  useEffect(() => {
    !userStatsDayLoad && dispatch(fetchUserStatsDay());
  }, [dispatch, userStatsDayLoad]);

  // const navigate = useNavigate();

  const toggleIsOpenModal = () => {
    setIsOpenModal((isOpenModal) => !isOpenModal);
  };

  // const handleLogout = async () => {
  //   try {
  //     await dispatch(logOut());
  //     navigate('/signin');
  //   } catch (error) {
  //     console.error('Error during logout:', error);
  //   }
  // };

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
          <DailyGoal dailyCalories={dailyCalories} dailyWater={dailyWaterMl} />
          <Water
            handleModal={toggleIsOpenModal}
            dailyWater={dailyWaterMl}
            waterAmount={waterAmount}
          />
          <FoodInfo
            dailyCalories={dailyCalories}
            amountCalories={amountCalories}
          />
          </MainElementsWrapper>
        <DARFWrap>
          <DiaryBlock />
          <RecommendedFoodMain />      
        </DARFWrap>
        {isOpenModal && <AddWaterModal handleModal={toggleIsOpenModal} />}
      </MainContainer>
      {/* <Link to="/signin" onClick={handleLogout}>
        Logout
      </Link> */}
    </>
  );
};

export default MainPage;
