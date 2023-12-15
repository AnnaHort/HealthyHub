import styled from 'styled-components';

export const SignUpRegisterContainer = styled.div`
  background-color: var(--color-primary-black);
  padding: 24px 0;
  width: 300px;
  padding-top: 24px;
  padding-bottom: 40px;
  padding-left: 10px;
  padding-right: 10px;

  @media (min-width: 834px) {
    width: 492px;
    margin: 0 auto;
    padding-top: 40px;
    padding-bottom: 60px;
    padding-left: 24px;
    padding-right: 24px;
    text-align: center;
  }
  @media (min-width: 1440px) {
    width: 1440px;
    padding-bottom: 72px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 104px;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 296px;
  margin-bottom: 24px;
  @media (min-width: 834px) {
    width: 380px;
    height: 376px;
    margin-bottom: 60px;
  }
  @media (min-width: 1440px) {
    width: 592px;
    height: 588px;
    margin-left: 116px;
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
  font-size: 22px;
  line-height: 1.33;
  margin-bottom: 24px;
  @media (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`;

export const RegisterForm = styled.form`
  display: flex;
  gap: 20px;
  flex-direction: column;

  @media (min-width: 834px) {
    width: 380px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1440px) {
    width: 212px;
    justify-content: flex-start;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const InputContainer = styled.div`
  background: transparent;
  position: relative;
  border: 1px solid var(--color-primary-green-lite);
  border-radius: 12px;
`;

export const Input = styled.input`
  color: var(--color-primary-grey);
  font-family: Poppins;
  line-height: 1.429;
  background: transparent;
  border-color: transparent;
  outline: none;
  padding: 8px 10px;
  width: 100%;
  :hover {
    color: var(--color-primary-white);
  }
  @media (min-width: 1440px) {
    width: 50%;
  }
`;

export const Button = styled.button`
  border-radius: 12px;
  border: none;
  outline: none;
  background: var(--color-primary-green-lite);
  padding: 8px 10px;
  margin-bottom: 48px;
  margin-top: 40px;

  color: var(--bg-primary);
  text-align: center;
  font-family: Poppins;
  font-weight: 500;
  line-height: 1.43;

  @media (min-width: 834px) {
    margin-bottom: 238px;
    width: 380px;
    margin-bottom: 206px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 168px;
    width: 212px;
  }
`;

export const QuestionBlock = styled.div`
  @media (min-width: 834px) {
    display: flex;
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
  }
`;

export const Link = styled.a`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.43;
`;




