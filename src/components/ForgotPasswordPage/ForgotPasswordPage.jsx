import axios from 'axios';
import {
  FormikEmailContainer,
  RegisterTitleContainer,
  SignInBtnContainer,
  SignInPagesContainer,
} from '../../pages/SignInPages/SignInPages.styled';
import { StyledSignImg } from '../SignUpForm/SignUpRegister.styled';

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
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';

axios.defaults.baseURL = 'https://healthhub-backend.onrender.com';
const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegexp, 'Invalid email')
    .required('Email is required'),
});

const ForgotPasswordPage = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post('/api/auth/forgot-password', values);
        toast.success(response.data.message, { autoClose: 3000 });
        resetForm();
      } catch (error) {
        toast.error(error.response.data.message, { autoClose: 2000 });
      }
    },
  });

  return (
    <SignInPagesContainer>
      <StyledSignImg viewBox="0 0 300 296" />
      <RegisterTitleContainer>
        <ForgotPassTitle>Forgot your password</ForgotPassTitle>
        <ForgotPassTitleText>
          We will send you an email with recovery instructions
        </ForgotPassTitleText>

        <ForgotForm autoComplete="off" onSubmit={formik.handleSubmit}>
          <div style={{ position: 'relative' }}>
            <label htmlFor="email">
              <InputForgot
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
      <ToastContainer position="top-right" />
    </SignInPagesContainer>
  );
};
export default ForgotPasswordPage;
