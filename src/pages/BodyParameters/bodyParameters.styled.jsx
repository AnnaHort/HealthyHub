import styled from "styled-components";
import { ReactComponent as BodyImg } from '/src/components/BodyParameters/img/Illustration-Body-parameters.svg';


export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding: 24px 10px 40px 10px; */
  padding-top: 24px;
  padding-bottom: 40px;
  background-color: var(--color-primary-black);

  @media (min-width: 834px) {
    padding-top: 40px;
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

  @media (min-width: 1024px) {
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

export const StyledBodyImg = styled(BodyImg)`

  @media (min-width: 834px) {
    width: 380px;
    height: 376px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1024px){
   margin-top: 90px;
  }

  @media (min-width: 1440px) {
    width: 590px;
    height: 588px;
  }
`;