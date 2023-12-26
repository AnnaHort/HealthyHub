import {
  StyledSignImg,
  LinkStyled,
  RegisterTitle,
} from '../../components/SignUpForm/SignUpRegister.styled';
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
  FormikEmailContainer,
  FormikPasswordContainer,
  SignInRegisterText,
} from './SignInPages.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';
import isLoggedIn from '/src/redux/auth/authSelectors.js';
import { toast, Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegexp, 'Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const SignInPages = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isComponentLoggedIn = useSelector(isLoggedIn);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await dispatch(logIn(values));

        if (response.type === 'auth/login/fulfilled' || isComponentLoggedIn) {
          toast.success('Successful login', { autoClose: 2000 });
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
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const userData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    try {
      const response = await dispatch(logIn(userData));
      if (response.type === 'auth/login/fulfilled' || isComponentLoggedIn) {
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
      <StyledSignImg viewBox="0 0 300 296" />
      <RegisterTitleContainer>
        <RegisterTitle>Sign in</RegisterTitle>
        <SignInRegisterText>You need to login to use the service</SignInRegisterText>

        <SignInForm autoComplete="off" onSubmit={formik.handleSubmit}>
          <div style={{ position: 'relative' }}>
            <label htmlFor="email">
              <InputSignIn
                style={{ position: 'relative' }}
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </label>
            {formik.touched.email && formik.errors.email && (
              <FormikEmailContainer>{formik.errors.email}</FormikEmailContainer>
            )}
          </div>

          <div style={{ position: 'relative' }}>
            <label htmlFor="password">
              <InputSignIn
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
            </label>
            {formik.touched.password && formik.errors.password && (
              <FormikPasswordContainer style={{ color: 'red' }}>
                {formik.errors.password}
              </FormikPasswordContainer>
            )}
          </div>

          <ForgotElementContainer>
            <SignInBtnContainer>
              <ButtonSignIn type="submit" onSubmit={handleSubmit}>
                Sign In
              </ButtonSignIn>

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
