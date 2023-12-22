import styled from 'styled-components';

export const MealTitle = styled.div`
  margin-left: 12px;
  font-size: 18px;
  line-height: 1.44;
  font-weight: 400;
`;

export const MealImageWrapper = styled.div`
  display: flex;
  align-items: baseline;
  margin-left: 12px;
`;

export const MealImage = styled.img``;

export const MealStatistic = styled.div`
  justify-content: flex-start;
  flex-wrap: wrap;
  row-gap: 12px;
  column-gap: 20px;
  max-width: 178px;
  margin-top: 12px;

  @media screen and (min-width: 834px) {
    row-gap: 0;
    max-width: 100%;
    margin-right: 85px;
  }
`;

export const StatisticItem = styled.p``;

export const StatisticValue = styled.span`
  display: inline-block;
  width: 36px;
  margin-left: 4px;
  font-weight: 500;
  color: var(--color-primary-grey);
  text-overflow: ellipsis;
`;
