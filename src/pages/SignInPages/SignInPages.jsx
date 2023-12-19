import {
  Image,
  LinkStyled,
  RegisterText,
  RegisterTitle,
} from '../../components/SignUpForm/SignUpRegister.styled';
import RegisterImageMobile from '../../img/register-img-mobile.png';
import RegisterImageTablet from '../../img/register-img-tablet.png';
import RegisterImageDesktop from '../../img/register-img-desktop.png';
import {
  SignInForm,
  InputSignIn,
  ButtonSignIn,
  ForgotElementContainer,
  ForgotPasswordContainer,
  ForgotPasswordLink,
  HaveAnAccountText,
  RegisterTitleContainer,
  SignInBtnContainer,
  SignInPagesContainer,
} from './SignInPages.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';
import isLoggedIn from '/src/redux/auth/authSelectors.js';
import { toast, Toaster } from 'react-hot-toast';

const SignInPages = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isComponentLoggedIn = useSelector(isLoggedIn);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const userData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    try {
      const response = await dispatch(logIn(userData));
      console.log('Response from Redux:', response);

      if (response.type === 'auth/login/fulfilled' || isComponentLoggedIn) {
        console.log('Successful login');
        navigate('/main');
      }

      if (
        response.payload &&
        response.payload === 'Request failed with status code 500'
      ) {
        toast.error('Email or password is wrong');
      }
    } catch (error) {
      console.error('Login Error:', error.message);
      if (error?.response?.status === 401) {
        toast.error('Invalid email or password');
      }
    }
  };

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

        <SignInForm autoComplete="off" onSubmit={handleSubmit}>
          <label htmlFor="email">
            <InputSignIn
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
            />
          </label>
          <label htmlFor="password">
            <InputSignIn
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
            <Toaster position="top-right" />
          </ForgotElementContainer>
        </SignInForm>
      </RegisterTitleContainer>
    </SignInPagesContainer>
  );
};
export default SignInPages;
