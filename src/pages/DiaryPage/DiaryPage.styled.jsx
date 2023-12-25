import styled from 'styled-components';

export const DiaryContainer = styled.div`
  width: 300px;
  margin-bottom: 40px;
  @media (min-width: 834px) {
    width: 780px;
  }
  @media (min-width: 1440px) {
    width: 1440px;
    display: flex;
    flex-flow: row wrap;
    margin-bottom: 52px;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const DiarySendBack = styled.a`
  @media (min-width: 1440px) {
    margin: 0;
    padding: 0;
  }
`;

export const DiaryTop = styled.h1`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  @media (min-width: 834px) {
    font-size: 30px;
    font-weight: 500;
    line-height: 36px;
    margin-top: 24px;
    margin-bottom: 0;
  }
  @media (min-width: 1440px) {
    padding: 0;
    width: 0;
    height: 0;
  }
`;

export const DiaryImg = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 12px;
  @media (min-width: 1440px) {
    margin: 0;
    padding: 0;
  }
`;

export const DiaryTitle = styled.h2`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  display: flex;
  @media (min-width: 834px) {
    width: 155px;
    font-size: 22px;
    line-height: 32px;
    display: inline-flex;
    margin-bottom: 10px;
    margin-top: 24px;
  }
  @media (min-width: 1440px) {
    margin-top: 72px;
    gap: 12px;
    display: inline-flex;
    align-items: flex-start;
  }
`;

export const DiaryBox = styled.div`
  flex-direction: column;
  display: flex;
  flex-flow: row wrap;
  @media (min-width: 834px) {
    width: 0;
    height: 0;
    display: inline-flex;
    flex-direction: column;
    justify-content: left;
    margin-left: 230px;
  }
  @media (min-width: 1440px) {
    gap: 60px;
    margin-left: 100px;
  }
`;

export const DiaryText = styled.p`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-right: 60px;
  margin-bottom: 12px;
  @media (min-width: 1440px) {
    margin-right: 0;
    margin-bottom: 0;
  }
`;

export const RecordContainer = styled.div`
  width: 300px;
  height: 232px;
  border-radius: 12px;
  background: var(--color-primary-black-2);
  margin-bottom: 24px;
  @media (min-width: 834px) {
    width: 780px;
    height: 240px;
  }
  @media (min-width: 1440px) {
    width: 676px;
    margin: 0px;
    padding-left: 20px;
    margin-left: 0px;
    margin-right: 20px;
  }
`;

export const DearyButton = styled.button`
  color: var(--color-primary-green-lite);
  background-color: var(--color-primary-black-2);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  border: none;
  padding-bottom: 0px;
  @media (min-width: 1440px) {
  }
`;

export const NumberWindow = styled.p`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  padding-left: 12px;
  margin-bottom: 22px;
  padding-top: 16px;
  display: flex;

  @media (min-width: 834px) {
    /* padding-top: 32px;
    padding-left: 14px; */
  }
`;

export const ButtonPlus = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 16px;
  margin-right: 6px;

  padding-bottom: 0px;
`;
