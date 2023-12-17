import {
  Image,
  Input,
  LinkStyled,
  RegisterForm,
  RegisterText,
  RegisterTitle,
} from '../../components/SignUpForm/SignUpRegister.styled';
//import RegisterImageMobile from '../../img/register-img-mobile.png';
//import RegisterImageTablet from '../../img/register-img-tablet.png';
import RegisterImageDesktop from '../../img/register-img-desktop.png';
import {
  ButtonSignIn,
  ForgotElementContainer,
  ForgotPasswordContainer,
  ForgotPasswordLink,
  HaveAnAccountText,
  RegisterTitleContainer,
  SignInBtnContainer,
  SignInPagesContainer,
} from './SignInPages.styled';

const SignInPages = () => {
  return (
    <SignInPagesContainer>
      <Image src={RegisterImageDesktop} alt="Image" />
      <RegisterTitleContainer>
        <RegisterTitle>Sign in</RegisterTitle>
        <RegisterText>You need to login to use the service</RegisterText>

        <RegisterForm autoComplete="off">
          <label htmlFor="email">
            <Input type="email" id="email" name="email" placeholder="E-mail" />
          </label>
          <label htmlFor="password">
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
          </label>
          <ForgotElementContainer>
            <SignInBtnContainer>
              <ButtonSignIn type="submit">Sign In</ButtonSignIn>
              <ForgotPasswordLink to="/forgot-password">
                Forgot your password?
              </ForgotPasswordLink>
            </SignInBtnContainer>

            <ForgotPasswordContainer>
              <HaveAnAccountText>
                If you don&#39;t have an account yet
              </HaveAnAccountText>
              <LinkStyled to="/signup">Sign up</LinkStyled>
            </ForgotPasswordContainer>
          </ForgotElementContainer>
        </RegisterForm>
      </RegisterTitleContainer>
    </SignInPagesContainer>
  );
};
export default SignInPages;
