import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ForgotPassBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
  @media (min-width: 834px) {
    margin-right: auto;
    margin-left: auto;
    width: 380px;
    gap: 286px;
  }
  @media (min-width: 1440px) {
      margin-right: 0;
      margin-left: 0;
    }
`;

export const ForgotPassTitle = styled.h2`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 16px;
  @media (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 16px;
    @media (min-width: 1440px) {
      text-align: start;
    }
  }
`;

export const ForgotPassTitleText = styled.p`
  color: var(--color-primary-grey);
  font-family: Poppins;
  font-size: 18px;
  line-height: 1.33;
  margin-bottom: 24px;
  @media (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
  @media (min-width: 1440px) {
      text-align: start;
    }
`;

export const ForgotForm = styled.form`
  @media (min-width: 834px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1440px) {
    margin-left: 0;
    margin-right: 0;
    text-align: start;
  }
`;

export const InputForgot = styled.input`
  color: var(--color-primary-grey);
  font-family: Poppins;
  line-height: 1.429;
  outline: none;
  padding: 8px 10px;
  width: 100%;
  background: transparent;
  position: relative;
  border: 1px solid var(--color-primary-green-lite);
  border-radius: 12px;
  max-width: 380px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;

  :hover {
    color: var(--color-primary-white);
  }
  @media (min-width: 1440px) {
    display: block;
    max-width: 212px;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const ForgotPassBtn = styled.button`
  border-radius: 12px;
  border: none;
  outline: none;
  background: var(--color-primary-green-lite);
  padding: 8px 10px;
  margin-top: 20px;
  color: var(--bg-primary);
  text-align: center;
  font-weight: 500;
  line-height: 1.43;
  width: 100%;
`;

export const ForgotPassLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 834px) {
    flex-direction: row;
  }
`;

export const ForgotPassText = styled.p`
  color: var(--color-primary-grey);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
`;

export const ForgotPassLinkSignUp = styled(Link)`
  color: var(--color-primary-white);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;
