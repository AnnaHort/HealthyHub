import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`

  width: 320px;
  padding-left: 10px;
  padding-right: 10px;

  margin: 0 auto;

  @media screen and (min-width: 834px) {
    width: 834px;
    padding-left: 27px;
    padding-right: 27px;
}

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-left: 34px;
    padding-right: 34px;
  }
`;


export const MainContainer = styled.main`
  padding-top: 16px;
  padding-bottom: 16px;

  @media screen and (min-width: 834px) {
    padding-top: 24px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 20px;
  }
`;

export const MainWrapperTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const MainTitle = styled.h1`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
  }
`;

export const MainLinkToGoal = styled(Link)`
  display: flex;
  align-items: center;
  color: var(--color-primary-grey);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  @media screen and (min-width: 834px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const MainText = styled.span`
  margin-right: 6px;
`;

export const MainElementsWrapper = styled.div`
  @media screen and (min-width: 834px) {
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    column-gap: 20px;
  } 
`;

//Diary And RecommendFood
export const DARFWrap = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    column-gap: 138px;
  }
`;