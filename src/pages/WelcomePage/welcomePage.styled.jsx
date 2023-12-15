import styled from "styled-components";

export const WelcomePageContainer = styled.div`
  padding: 24px 10px 40px 10px;
  background-color: var(--color-primary-black);

  @media (min-width: 1024px) {
    padding: 40px 0;
    display: flex;
   justify-content: center;
  }
`;

export const FlexContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-left: 104px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 24px;
  margin-bottom: 40px;
  gap: 16px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
  @media (min-width: 1024px) {
    margin-bottom: 80px;
  }
`;

export const TitleContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 1024px) {
  }
`;
