import styled from 'styled-components';

export const WelcomePageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 24px 10px 40px 10px;
  background-color: var(--color-primary-black);

  @media (min-width: 768px) and (max-width: 1023px) {
    padding-top: 40px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    padding: 40px 20px;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 1280px) and (max-width: 1439px) {
    padding: 40px;
    display: flex;
    justify-content: center;
  }

  @media (min-width: 1440px) {
    padding: 40px 150px;
    display: flex;
    justify-content: center;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) and (max-width: 1279px) {
    display: flex;
    flex-direction: column;
    margin-left: 40px;
  }

  @media (min-width: 1280px) {
    margin-left: 104px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 24px;
  margin-bottom: 40px;
  gap: 16px;

  @media (min-width: 768px) and (max-width: 1023px) {
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
