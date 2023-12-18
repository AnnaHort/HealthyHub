import {
  SignUpRegisterContainer,
  Image,
  RegisterTitle,
  RegisterText,
  RegisterForm,
  InputContainer,
  Input,
  Button,
  QuestionBlock,
  Question,
  LinkStyled,
} from './SignUpRegister.styled';
import RegisterImageMobile from '../../img/register-img-mobile.png';
import RegisterImageTablet from '../../img/register-img-tablet.png';
import RegisterImageDesktop from '../../img/register-img-desktop.png';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';

const SignUpRegister = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch();

  const handleSubmit = (e) => {

    e.preventDefault();

    const form = e.currentTarget;

    const userData = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };

    console.log(userData);

    if (
      userData.name !== '' &&
      userData.email !== '' &&
      userData.password !== ''
    ) {
      dispatch(register(userData));
      form.reset();
      navigate('/signin')
    } else {
      alert('please fill in all input fields');
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
            <InputContainer>
              <Input type="text" id="name" name="name" placeholder="Name" />
            </InputContainer>
          </label>

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
          <Button type="submit">Next</Button>
          <QuestionBlock>
            <Question>Do you already have an account?</Question>
            <LinkStyled to="/signin">Sign in</LinkStyled>
          </QuestionBlock>
        </RegisterForm>
      </div>
    </SignUpRegisterContainer>
  );
};

export default SignUpRegister;
