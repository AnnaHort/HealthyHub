//import { useState } from 'react';
import axios from 'axios';
import * as Yup from 'yup';

import { Formik } from 'formik';

import {
  SignUpRegisterContainer,
  Image,
  RegisterTitle,
  RegisterText,
  Input,
  RegisterForm,
  Button,
  QuestionBlock,
  Question,
  Link,
} from './SignUpRegister.styled';
import RegisterImageMobile from '../../img/register-img-mobile.png';
import RegisterImageTablet from '../../img/register-img-tablet.png';
import RegisterImageDesktop from '../../img/register-img-desktop.png';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

const SignUpRegister = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://healthhub-backend.onrender.com/api/auth/signup',
        initialValues
      );
      console.log('Успешная регистрация', response.data);
    } catch (error) {
      console.error('Ошибка регистрации', error);
    }
  };
  return (
    <SignUpRegisterContainer>
      <Image
        src={RegisterImageMobile}
        srcSet={`${RegisterImageTablet} 834w, ${RegisterImageDesktop} 1440w`}
        sizes="(max-width: 833px) 100vw, (min-width: 834px) 50vw"
        alt="Responsive Image"
      />
      <div>
        <RegisterTitle>Sign up</RegisterTitle>
        <RegisterText>You need to register to use the service</RegisterText>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={SignupSchema}
        >
          {({ errors, touched }) => {
            console.log('Errors:', errors);
            console.log('Touched:', touched);

            return (
              <RegisterForm autoComplete="off">
                <label htmlFor="name">
                  <Input name="name" placeholder="Name" />
                  {errors.name && touched.name ? (
                    <div>{errors.name}</div>
                  ) : null}
                </label>
                <label htmlFor="email">
                  <Input name="email" type="email" placeholder="E-mail" />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </label>
                <label htmlFor="password">
                  <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                  {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                  ) : null}
                </label>
                <Button type="submit">Next</Button>
                <QuestionBlock>
                  <Question>Do you already have an account?</Question>
                  <Link to="/signin">Sign in</Link>
                </QuestionBlock>
              </RegisterForm>
            );
          }}
        </Formik>
      </div>
    </SignUpRegisterContainer>
  );
};

export default SignUpRegister;
