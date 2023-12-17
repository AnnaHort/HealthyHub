import styled from "styled-components";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 10px 40px 10px;
  background-color: var(--color-primary-black);

  @media (min-width: 834px) and (max-width: 1023px) {
    padding-top: 40px;
  }

  @media (min-width: 1024px) and (max-width: 1279px) {
    padding: 40px 20px;
    display: flex;
    justify-content: center;
    flex-direction: row;
  }

  @media (min-width: 1280px) and (max-width: 1439px) {
    padding: 40px;
    display: flex;
    justify-content: center;
    flex-direction: row;
  }

  @media (min-width: 1440px) {
    padding: 40px 150px;
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
`;

export const FlexBodyContainer = styled.div`
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1024px) and (max-width: 1279px) {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }

  @media (min-width: 1280px) {
    padding: 40px;
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
`;

export const WrappBodyContainer = styled.div`
  @media (min-width: 1024px) {
  margin-left: 104px;
  }
`;