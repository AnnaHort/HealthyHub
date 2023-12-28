import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DiaryContainer = styled.div`
  width: 300px;
  margin-bottom: 40px;
  @media (min-width: 834px) {
    width: 780px;
  }
  @media (min-width: 1440px) {
    width: 1440px;
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 52px;
    margin-left: 0;
    margin-right: 0;
    gap: 26px 20px;
  }
`;



export const DiaryTop = styled.h1`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  @media (min-width: 834px) {
    font-size: 30px;
    font-weight: 500;
    line-height: 36px;
    margin-top: 24px;
    margin-bottom: 16px;
  }
  @media (min-width: 1440px) {

  }
`;

export const DiaryImg = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 12px;
  @media (min-width: 1440px) {
    margin: 0;
    padding: 0;
  }
`;

export const DiaryBoxContainer = styled.div`
  @media (min-width: 834px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const DiaryTitle = styled.h2`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  display: flex;
  margin-bottom: 12px;
  @media (min-width: 834px) {
    width: 155px;
    font-size: 22px;
    line-height: 32px;
    margin-bottom: 6px;
  }
  @media (min-width: 1440px) {
    gap: 12px;
    display: inline-flex;
    align-items: flex-start;
  }
`;

export const DiaryBox = styled.div`
  flex-direction: column;
  display: flex;
  flex-flow: row wrap;
  @media (min-width: 834px) {
    gap: 34px;
    margin-right: 64px;
  }
  @media (min-width: 1440px) {
    gap: 60px;
  }
`;

export const DiaryText = styled.p`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-right: 60px;
  margin-bottom: 12px;
  @media (min-width: 834px) {
    margin: 0;
  }
  @media (min-width: 1440px) {
    margin-right: 0;
    margin-bottom: 0;
  }
`;

export const RecordContainer = styled.div`
  width: 300px;
  height: 232px;
  border-radius: 12px;
  background: var(--color-primary-black-2);
  margin-bottom: 24px;
  @media (min-width: 834px) {
    width: 780px;
    height: 240px;
  }
  @media (min-width: 1440px) {
    width: 676px;
    margin: 0px;
    padding-left: 20px;
    margin-left: 0px;
    margin-right: 20px;
  }
`;

export const DearyButton = styled.button`
  color: var(--color-primary-green-lite);
  background-color: var(--color-primary-black-2);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  border: none;
  padding-bottom: 0px;
  @media (min-width: 1440px) {
  }
`;

export const NumberWindow = styled.p`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  padding-left: 12px;
  margin-bottom: 22px;
  padding-top: 16px;
  display: flex;

  @media (min-width: 834px) {
    /* padding-top: 32px;
    padding-left: 14px; */
  }
`;

export const FoodInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  @media (min-width: 834px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const DishListContainer = styled.div`
  padding: 16px 12px;
  @media (min-width: 834px) {
    padding: 32px 14px;
  }
`;

export const DishNameContainer = styled.div`
  display: flex;
  @media (min-width: 834px) {
  }
`;

export const ButtonPlus = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 16px;
  margin-right: 6px;
  padding-bottom: 0px;
`;

export const FoodNumberStyle = styled.p`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  margin-right: 16px;
  font-style: normal;
`;
export const DishNameStyle = styled.p`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  font-style: normal;
`;

export const AboutDishContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-left: 22px;
  @media (min-width: 834px) {
    margin-left: 0px;
    gap: 32px;
  }
`;

export const MobileSpan = styled.span`
  color: var(--color-primary-grey);
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  margin-right: 6px;
  font-style: normal;
  @media (min-width: 834px) {
    display: none;
  }
`;
export const DishDetails = styled.p`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  @media (min-width: 834px) {
    width: 80px;
  }
`;
export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
`;