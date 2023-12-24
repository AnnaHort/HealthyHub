import styled from 'styled-components';

export const StyledListFood = styled.ul`
  @media (min-width: 834px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

export const StyledList = styled.li`
  display: flex;
  padding: 20px 20px 24px;
  align-items: center;
  border-radius: 12px;
  margin-bottom: 20px;
  background-color: var(--color-primary-black-2);
  @media (min-width: 834px) {
   margin-bottom: 0;
  }
`;

export const TitleListRecommendedFood = styled.h2`
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  color: var(--color-primary-white);
  display: none;
`;

export const WrappContainer = styled.div`
margin-left: 20px;
`;

export const NameDesc = styled.p`
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: var(--color-primary-white);
`;

export const GramsDesc = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: var(--color-primary-white);
`;

export const CaloriesDesc = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: var(--color-primary-grey);
`;
