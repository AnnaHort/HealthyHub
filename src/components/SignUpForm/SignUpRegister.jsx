//import { useState } from 'react';
//import axios from 'axios';
import * as Yup from 'yup';

import { Formik } from 'formik';

import {
  SignUpRegisterContainer,
  StyledSignImg,
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
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const SignUpRegister = ({ onSubmit, onNext }) => {
  return (
    <SignUpRegisterContainer>
      <StyledSignImg viewBox="0 0 300 296" />
      <div>
        <RegisterTitle>Sign up</RegisterTitle>
        <RegisterText>You need to register to use the service</RegisterText>
        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting }) => {
            onSubmit(values);
            onNext();
            setSubmitting(false); // Разблокировка формы после отправки
          }}
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
