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
  LinkStyled,
  ErrorMessage,
} from './SignUpRegister.styled';

import RegisterImageDesktop from '../../img/register-img-desktop.png';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .matches(emailRegexp, 'Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 8 characters')
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
      <Image src={RegisterImageDesktop} alt="Responsive Image" />
      <div>
        <RegisterTitle>Sign up</RegisterTitle>
        <RegisterText>You need to register to use the service</RegisterText>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={SignupSchema}
        >
          {({ errors, touched }) => {
            return (
              <RegisterForm autoComplete="off">
                <label htmlFor="name">
                  <Input name="name" placeholder="Name" />

                  {errors.name && touched.name ? (
                    <ErrorMessage>{errors.name}</ErrorMessage>
                  ) : null}
                </label>
                <label htmlFor="email">
                  <Input name="email" type="email" placeholder="E-mail" />

                  {errors.email && touched.email ? (
                    <ErrorMessage>{errors.email}</ErrorMessage>
                  ) : null}
                </label>
                <label htmlFor="password">
                  <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                  {errors.password && touched.password ? (
                    <ErrorMessage>{errors.password}</ErrorMessage>
                  ) : null}
                </label>
                <Button type="submit">Next</Button>
                <QuestionBlock>
                  <Question>Do you already have an account?</Question>
                  <LinkStyled to="/signin">Sign in</LinkStyled>
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
