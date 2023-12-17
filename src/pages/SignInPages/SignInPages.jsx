import { Image, Input, InputContainer, LinkStyled, RegisterForm, RegisterText, RegisterTitle } from "../../components/SignUpForm/SignUpRegister.styled";
import RegisterImageMobile from '../../img/register-img-mobile.png';
import RegisterImageTablet from '../../img/register-img-tablet.png';
import RegisterImageDesktop from '../../img/register-img-desktop.png';
import { ButtonSignIn, ForgotPasswordContainer, ForgotPasswordText, HaveAnAccountText, RegisterTitleContainer, SignInPagesContainer, SignInQuestionContainer } from "./SignInPages.styled";
const SignInPages = () => {
  return (
    <SignInPagesContainer>
    <Image
      src={RegisterImageMobile}
      srcSet={`${RegisterImageTablet} 834w, ${RegisterImageDesktop} 1440w`}
      sizes="(max-width: 833px) 100vw, (min-width: 834px) 50vw"
      alt="Responsive Image"
    />
    <RegisterTitleContainer>
      <RegisterTitle>Sign in</RegisterTitle>
      <RegisterText>You need to login to use the service</RegisterText>

      <RegisterForm autoComplete="off">

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
        <ButtonSignIn type="submit">Sign In</ButtonSignIn>

<ForgotPasswordContainer>

<ForgotPasswordText>Forgot your password?</ForgotPasswordText>

<SignInQuestionContainer>
<HaveAnAccountText>If you don&#39;t have an account yet</HaveAnAccountText>
  <LinkStyled to="/signup">Sign up</LinkStyled>
</SignInQuestionContainer>

</ForgotPasswordContainer>

      </RegisterForm>
    </RegisterTitleContainer>
  </SignInPagesContainer>
  )
};
export default SignInPages;
