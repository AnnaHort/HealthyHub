import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Field, Form } from 'formik';

export const SignUpRegisterContainer = styled.div`
  background-color: var(--color-primary-black);
  width: 320px;
  margin: 0 auto;
  padding-top: 24px;
  padding-bottom: 40px;
  padding-left: 10px;
  padding-right: 10px;

  @media (min-width: 834px) {
    width: 492px;
    padding-top: 40px;
    padding-bottom: 60px;
    padding-left: 24px;
    padding-right: 24px;
    text-align: center;
  }
  @media (min-width: 1440px) {
    width: 1440px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 104px;
    text-align: start;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 296px;
  margin-bottom: 24px;

  margin-right: auto;
  margin-left: auto;

  @media (min-width: 834px) {
    width: 380px;
    height: 376px;
    margin-bottom: 60px;
  }
  @media (min-width: 1440px) {
    width: 592px;
    height: 588px;
    margin-bottom: 0;
    margin-right: 0;
    margin-left: 0;
  }
`;

export const RegisterTitle = styled.h2`
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
      text-align: left;
    }
  }
`;

export const RegisterText = styled.p`
  color: var(--color-primary-grey);
  font-family: Poppins;
  font-size: 18px;
  line-height: 1.33;
  margin-bottom: 24px;
  @media (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
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
    text-align: start;
  }
`;

export const Input = styled(Field)`
  position: relative;
  border: 1px solid var(--color-primary-green-lite);
  border-radius: 12px;
  max-width: 380px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;

  color: var(--color-primary-grey);
  font-family: Poppins;
  line-height: 1.429;
  background: transparent;
  padding: 8px 10px;
  width: 100%;
  :hover {
    color: var(--color-primary-white);
  }
  @media (min-width: 1440px) {
    /* width: 50%; */
  }
`;

export const ErrorMessage = styled.input`
  color: red;
`;

export const Button = styled.button`
  border-radius: 12px;
  border: none;
  outline: none;
  background: var(--color-primary-green-lite);
  padding: 8px 10px;
  margin-bottom: 48px;
  margin-top: 20px;
  color: var(--bg-primary);
  text-align: center;
  font-family: Poppins;
  font-weight: 500;
  line-height: 1.43;
  width: 100%;
  @media (min-width: 834px) {
    max-width: 380px;
    margin-bottom: 238px;
    margin-bottom: 206px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 168px;
    width: 50%;
  }
`;

export const QuestionBlock = styled.div`
  @media (min-width: 834px) {
    display: flex;
    justify-content: center;
  }
  @media (min-width: 1440px) {
    align-items: flex-start;
  }
`;

export const Question = styled.p`
  color: var(--color-primary-grey);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.43;
  margin-bottom: 16px;
  @media (min-width: 834px) {
    margin-right: 16px;
    margin-bottom: 0px;
  }
`;

export const LinkStyled = styled(Link)`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.43;
`;
