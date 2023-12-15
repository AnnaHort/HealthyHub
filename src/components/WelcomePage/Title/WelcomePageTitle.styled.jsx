import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 444px;
    display: flex;
    text-align: center;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 1024px) {
    text-align: unset;
  }
`;

export const MainTitle = styled.h1`
  font-family: Poppins;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  color: var(--color-primary-white);

  margin-top: 24px;

  @media (min-width: 768px) {
    display: flex;
    font-size: 30px;
    line-height: 36px;

    margin-top: 80px;
  }

`;

export const Title = styled.h2`
  // width: 290px;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: var(--color-primary-white);

  margin-top: 16px;

  @media (min-width: 768px) {
    width: 410px;
    font-size: 22px;
    line-height: 32px;
  }

  @media (min-width: 1024px) {
 display: flex;
 flex-wrap: wrap;
  }
`;