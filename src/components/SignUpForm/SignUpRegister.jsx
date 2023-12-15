import {
  SignUpRegisterContainer,
  Image,
  RegisterTitle,
  RegisterText,
  RegisterForm,
  InputContainer,
  Input,
  Button,
  QuestionBlock,
  Question,
  Link,
} from './SignUpRegister.styled';
import RegisterImage from '../../img/register-img-mobile.png';

const SignUpRegister = () => {
  return (
    <SignUpRegisterContainer>
      <Image src={RegisterImage} alt="image" />
      <div>
        <RegisterTitle>Sign up</RegisterTitle>
        <RegisterText>You need to register to use the service</RegisterText>
        <RegisterForm autoComplete="off">
          <label htmlFor="name">
            <InputContainer>
              <Input type="text" id="name" name="name" placeholder="Name" />
            </InputContainer>
          </label>
          <label htmlFor="email">
            <InputContainer>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
              />
            </InputContainer>
          </label>
          <label htmlFor="password">
            <InputContainer>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
            </InputContainer>
          </label>
          <Button type="submit">Next</Button>
          <QuestionBlock>
            <Question>Do you already have an account?</Question>
            <Link to="/signin">Sign in</Link>
          </QuestionBlock>
        </RegisterForm>
      </div>
    </SignUpRegisterContainer>
  );
};

export default SignUpRegister;
