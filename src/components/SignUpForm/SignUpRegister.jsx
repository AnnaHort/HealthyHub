import { useState } from 'react';
import axios from 'axios';

 import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import {
  SignUpRegisterContainer,
  Image,
  RegisterTitle,
  RegisterText,
  RegisterForm,
  //InputContainer,
  Input,
  Button,
  QuestionBlock,
  Question,
  Link,
} from './SignUpRegister.styled';
import RegisterImageMobile from '../../img/register-img-mobile.png';
import RegisterImageTablet from '../../img/register-img-tablet.png';
import RegisterImageDesktop from '../../img/register-img-desktop.png';


const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});


const SignUpRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://healthhub-backend.onrender.com/api/auth/signup',
        formData
      );

      // Обработка успешного ответа от сервера
      console.log('Успешная регистрация', response.data);
    } catch (error) {
      // Обработка ошибки
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
          
        <RegisterForm autoComplete="off" onSubmit={handleSubmit}>
          <label htmlFor="name">
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="email">
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="password">
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
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
