import {
  RegisterTitleContainer,
  SignInBtnContainer,
  SignInPagesContainer,
} from '../../pages/SignInPages/SignInPages.styled';
import { Image } from '../SignUpForm/SighUpRegister/SignUpRegister.styled';
import RegisterImageMobile from '../../img/register-img-mobile.png';
import RegisterImageTablet from '../../img/register-img-tablet.png';
import RegisterImageDesktop from '../../img/register-img-desktop.png';
import {
  InputForgot,
  ForgotForm,
  ForgotPassBtn,
  ForgotPassBtnContainer,
  ForgotPassLinkContainer,
  ForgotPassLinkSignUp,
  ForgotPassText,
  ForgotPassTitle,
  ForgotPassTitleText,
} from './ForgotPasswordPage.styled';

const ForgotPasswordPage = () => {
  return (
    <SignInPagesContainer>
      <Image
        src={RegisterImageMobile}
        srcSet={`${RegisterImageTablet} 834w, ${RegisterImageDesktop} 1440w`}
        sizes="(max-width: 833px) 100vw, (min-width: 834px) 50vw"
        alt="Responsive Image"
      />
      <RegisterTitleContainer>
        <ForgotPassTitle>Forgot your password</ForgotPassTitle>
        <ForgotPassTitleText>
          We will send you an email with recovery instructions
        </ForgotPassTitleText>

        <ForgotForm autoComplete="off">
          <label htmlFor="email">
            <InputForgot
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
            />
          </label>

          <ForgotPassBtnContainer>
            <SignInBtnContainer>
              <ForgotPassBtn type="submit">Send</ForgotPassBtn>
            </SignInBtnContainer>

            <ForgotPassLinkContainer>
              <ForgotPassText>
                If you don&#39;t have an account yet
              </ForgotPassText>
              <ForgotPassLinkSignUp to="/signup">Sign up</ForgotPassLinkSignUp>
            </ForgotPassLinkContainer>
          </ForgotPassBtnContainer>
        </ForgotForm>
      </RegisterTitleContainer>
    </SignInPagesContainer>
  );
};
export default ForgotPasswordPage;
