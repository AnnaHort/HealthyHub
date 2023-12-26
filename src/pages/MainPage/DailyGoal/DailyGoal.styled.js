import styled from 'styled-components';

//MDG --- Main Daily Goal

export const MDGContainer = styled.div``;

export const MDGTitle = styled.h2`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px; 
  }
`;

export const MDGInfoCard = styled.div`
  padding: 16px 12px;
  width: 300px;
  height: 212px;
  border-radius: 12px;
  background-color: var(--color-primary-black-2);
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 240px;
    padding: 24px 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 328px;
    height: 240px;
    padding: 24px 40px;
  }
`;

export const MDGCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 250px;
  height: 180px;
  gap: 20px;

  @media screen and (min-width: 834px) {
    height: 192px;
    row-gap: 32px;
  }
`;

export const MDGInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MDGInfoTitle = styled.p`
  color: var(--color-primary-grey);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  padding-bottom: 4px;
`;

export const MDGInfoNumber = styled.p`
  display: flex;
  align-items: center;
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 34px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
`;

export const Unit = styled.span`
  color: var(--color-primary-grey);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-left: 4px;
`;