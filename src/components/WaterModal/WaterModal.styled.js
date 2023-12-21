import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: 266px;
  border-radius: 12px;
  background: var(--color-primary-black-2);
  padding: 16px 12px 24px 12px;

  @media (min-width: 834px) {
    width: 338px;
    height: 280px;
    padding: 24px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 125% */
  margin-bottom: 24px;

  @media (min-width: 834px) {
    font-size: 30px;
    line-height: 36px; /* 120% */
  }
`;

export const Text = styled.p`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  margin-bottom: 12px;

  @media (min-width: 834px) {
  }
`;

export const Input = styled.input`
  width: 276px;
  height: 36px;
  padding: 8px 10px;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  border: 1px solid var(--color-primary-green-lite);
  border-radius: 12px;
  background: transparent;
  color: var(--color-primary-grey);
  margin-bottom: 12px;
  outline: none;
  margin-bottom: 32px;

  @media (min-width: 834px) {
    width: 212px;
  }
`;

export const BtnConfirm = styled.button`
  width: 276px;
  height: 36px;
  color: var(--color-primary-black-2);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  border-radius: 12px;
  background: var(--color-primary-green-lite);
  display: flex;
  padding: 8px 10px;
  flex-direction: column;
  align-items: center;
  border: none;
  margin-bottom: 16px;

  @media (min-width: 834px) {
    width: 212px;
  }

  @media (min-width: 1440px) {
  }
`;

export const BtnCancel = styled.button`
  width: 276px;
  margin: 0;
  color: var(--color-primary-grey);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  display: block;

  @media (min-width: 834px) {
    width: 212px;
  }
`;
