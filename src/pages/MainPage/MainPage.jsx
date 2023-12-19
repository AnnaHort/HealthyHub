import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { logOut } from "../../redux/auth/authOperations";
import { Link, useNavigate } from "react-router-dom";

import { ReactComponent as ArrowRigth } from '../../img/MainPages/arrow-right.svg';

import {
  Container,
  MainContainer,
  MainTitle,
  MainLinkToGoal,
  MainText,
  MainWrapperTitle,
  MainElementsWrapper,
  DARFWrap,
} from './MainPage.styled';

const MainPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await dispatch(logOut());
      navigate("/signin");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <Container>
      <MainContainer>
        <MainWrapperTitle>
          <MainTitle>Today</MainTitle>
          <MainLinkToGoal to="dashboard">
            <MainText>On the way to the goal</MainText>
            <ArrowRigth />
          </MainLinkToGoal>
        </MainWrapperTitle>
      </MainContainer>
      <Link to="/signin" onClick={handleLogout}>
      Logout
    </Link>
    </Container>
  );
};

export default MainPage;
