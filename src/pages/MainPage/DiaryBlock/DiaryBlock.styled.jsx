import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const DiaryBlockContainer = styled.div`
  width: 100%;
  margin-top: 12px;
  padding: 16px 12px;
  border-radius: 12px;
  background: var(--color-primary-black-2);
  overflow-y: auto;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 16px;
`;

export const DiaryBlockTitle = styled.h1`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-top: 0;
  margin-bottom: 0;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`;

export const SeeMoreButton = styled(NavLink)`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: var(--primary-grey-color);
`;

export const DiaryBlockList = styled.ul`
  
`;

export const DiaryBlockItem = styled.li`
  
`;

export const MealTitle = styled.h3`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  width: 160px;
`;

export const NutrientList = styled.ul`
  
`;

export const NutrientItem = styled.li`
  
`;

export const AddMealButton = styled.button`
  
`;
