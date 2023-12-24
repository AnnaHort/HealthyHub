import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const DiaryBlockContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 0px 10px;
  border-radius: 12px;
  background: var(--color-primary-black);
  overflow-y: auto;

  border: 2px solid red;
`;

export const DiaryBlockTitleWrapper = styled.div`
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
  margin-right: 16px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`;

export const SeeMoreButton = styled(NavLink)`
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: var(--color-primary-grey);
  
  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const DiaryBlockList = styled.ul``;

export const DiaryBlockItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 28px;
  }
`;

export const MealTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
`;

export const MealTitle = styled.h3`
  font-family: Poppins;
  font-style: normal;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  color: var(--color-primary-white);
  display: flex;
  align-items: center;
  margin-left: 12px;
`;

export const NutrientList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 8px;
`;

export const NutrientItem = styled.li`
display:flex;
width: calc((100% - 12px)/2)`;

export const NutrientName = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: var(--color-primary-white);
  margin-right: 10px;
`;
export const NutrientValue = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--color-primary-white);
`;
export const AddMealButton = styled.button`
  font-family: Poppins;
  font-style: normal;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  align-items: center;
  column-gap: 8px;
  border: none;
  background-color: transparent;
  line-height: 1.43;
  font-weight: 500;
  color: var(--color-primary-green-lite);
  cursor: pointer;

  svg {
    fill: var(--color-primary-green-lite);
  }
`;
