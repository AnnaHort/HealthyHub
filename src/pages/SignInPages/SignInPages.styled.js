import styled from 'styled-components';
import { Link } from '../../components/SignUpForm/SignUpRegister.styled';

export const SignInPagesContainer = styled.div`
  background-color: var(--color-primary-black);
  width: 320px;
  margin: 0 auto;
  padding-top: 24px;
  padding-bottom: 40px;
  padding-left: 10px;
  padding-right: 10px;

  @media (min-width: 768px) {
    width: 492px;
    padding-top: 40px;
    padding-bottom: 60px;
    padding-left: 24px;
    padding-right: 24px;
    text-align: center;
  }
  @media (min-width: 1440px) {
    min-width: 1440px;
    gap: 104px;
    display: flex;
    padding: 40px 150px 60px 150px;
  }
`;

export const RegisterTitleContainer = styled.div`
    @media (min-width: 1440px) {
        padding-top: 80px;
  }
`

export const ButtonSignIn = styled.button`
  border-radius: 12px;
  border: none;
  outline: none;
  background: var(--color-primary-green-lite);
  padding: 8px 10px;
  margin-bottom: 14px;
  margin-top: 20px;
  color: var(--bg-primary);
  text-align: center;
  font-family: Poppins;
  font-weight: 500;
  line-height: 1.43;
  width: 100%;
  @media (min-width: 768px) {
    max-width: 380px;
    margin-bottom: 20px;
  }
  @media (min-width: 1440px) {
    width: 50%;
  }
`;

export const ForgotPasswordContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    height: 222px;
    flex-direction: column;
    justify-content: space-between;
    max-width: 380px;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const ForgotPasswordText = styled.p`
  color: var(--color-primary-grey);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  text-align: center;
  margin-bottom: 54px;
  @media (min-width: 1440px) {
    text-align: start;
    margin-bottom: 184px;
  }
`;

export const SignInQuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 768px) {
    justify-content: start;
    gap: 16px;
    margin-right: 0;
    margin-left: 0;
  }
`;

export const HaveAnAccountText = styled.p`
  color: var(--color-primary-grey);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
`;

export const SignUpLink = styled(Link)`
  color: var(--color-primary-white);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;
