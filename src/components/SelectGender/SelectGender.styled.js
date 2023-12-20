import styled from 'styled-components';
import { Field, Form } from 'formik';

export const SelectGenderContainer = styled.div`
  background-color: var(--color-primary-black);
  width: 320px;
  margin: 0 auto;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 10px;
  padding-right: 10px;
  @media (min-width: 834px) {
    width: 492px;
    padding-top: 40px;
    padding-bottom: 228px;
    padding-left: 24px;
    padding-right: 24px;
    text-align: center;
  }
  @media (min-width: 1440px) {
    width: 1440px;
    display: flex;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 90px;
    padding-left: 150px;
    padding-right: 150px;
    gap: 104px;
    text-align: start;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 296px;
  margin-bottom: 10px;
  @media (min-width: 834px) {
    width: 380px;
    height: 376px;
    margin-bottom: 60px;
  }
  @media (min-width: 1440px) {
    width: 592px;
    height: 588px;
    margin-bottom: 0;
  }
`;

export const SelectGenderRegisterTitle = styled.h2`
  color: var(--color-primary-white);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 16px;
  padding-left: 10px;
  padding-right: 10px;
  @media (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 16px;
  }
  @media (min-width: 1440px) {
    text-align: left;
    margin-top: 80px;
  }
`;

export const SelectGenderRegisterText = styled.p`
  color: var(--color-primary-grey);
  font-size: 18px;
  line-height: 1.33;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 24px;
  font-weight: 400;
  line-height: 1.33;
  @media (min-width: 834px) {
    text-align: center;
    font-size: 22px;
    line-height: 1.45;
    padding-left: 0;
    padding-right: 0;

    @media (min-width: 1440px) {
      text-align: left;
      padding-left: 0;
      padding-right: 72px;
    }
  }
`;

export const RadioButtonText = styled.p`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 12px;
  @media (min-width: 834px) {
    width: 444px;
    text-align: left;
    margin-left: 32px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 12px;
    margin-left: 0;
  }
`;

export const RegisterForm = styled(Form)`
  @media (min-width: 834px) {
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 1440px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const GenderRadioBtnContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  @media (min-width: 834px) {
    width: 380px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 1440px) {
    display: flex;
    width: 380px;
    flex-direction: column;
    margin-right: 0;
    margin-left: 0;
  }
`;

export const Text = styled.p`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  margin-bottom: 12px;
  @media (min-width: 834px) {
    width: 380px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 1440px) {
    width: auto;
    margin-bottom: 12px;
  }
`;

export const SelectGenderInputContainer = styled.div`
  background: transparent;
  position: relative;
  border: 1px solid var(--color-primary-green-lite);
  border-radius: 12px;
  margin-bottom: 40px;
  @media (min-width: 834px) {
    width: 380px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 1440px) {
    max-width: 212px;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const Input = styled(Field)`
  color: var(--color-primary-grey);
  font-family: Poppins;
  line-height: 1.429;
  background: transparent;
  border-color: transparent;
  outline: none;
  padding: 8px 10px;
  width: 300px;
  :hover {
    color: var(--color-primary-white);
  }
  @media (min-width: 834px) {
    width: 380px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 1440px) {
    width: 212px;
    background: transparent;
    border-color: transparent;
  }
`;

export const Button = styled.button`
  border-radius: 12px;
  border: none;
  outline: none;
  background: var(--color-primary-green-lite);
  padding: 8px 10px;
  margin-bottom: 20px;
  color: var(--bg-primary);
  text-align: center;
  font-family: Poppins;
  font-weight: 500;
  line-height: 1.43;
  width: 300px;
  @media (min-width: 834px) {
    width: 380px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 22px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 20px;
    width: 212px;
  }
`;

export const ButtonBack = styled.button`
  color: var(--color-primary-grey);
  background-color: var(--color-primary-black);
  width: 192px;
  margin: 0 auto;
  display: block;
  border: none;
  @media (min-width: 834px) {
    max-width: 380px;
  }
  @media (min-width: 1440px) {
    margin: 0;
    width: 212px;
  }
`;

export const GenderErrorMessage = styled.div`
  color: #e74a3b;
  margin-bottom: 20px;
`;

export const AgeErrorMessage = styled.div`
  color: #e74a3b;
  margin-bottom: 20px;
`;