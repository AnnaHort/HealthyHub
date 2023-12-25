import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  SelectGenderContainer,
  StyledGenderImg,
  Text,
  RegisterForm,
  Input,
  Button,
  ButtonBack,
  GenderRadioBtnContainer,
  SelectGenderInputContainer,
  SelectGenderRegisterTitle,
  SelectGenderRegisterText,
  GenderErrorMessage,
  AgeErrorMessage,
} from './SelectGender.styled';

import {
  RadioButtonContainerStyled,
  RadioInputStyle,
  RadioLabelStyle,
} from '../YourActivity/YourActivity.styled';

const initialValues = {
  gender: '',
  age: '',
};

const genderAgeSchema = Yup.object().shape({
  gender: Yup.string().required('Select gender').oneOf(['Male', 'Female']),
  age: Yup.number()
    .required('Specify age')
    .integer('Age must be an integer')
    .min(1, 'Minimum age is 1 year')
    .max(100, 'Maximum age is 100 years'),
});

const SelectGenderChoose = ({ onNext, onBack, onSubmit }) => {
  return (
    <SelectGenderContainer>
      <StyledGenderImg viewBox="0 0 300 288" />
<div>
<SelectGenderRegisterTitle>Select gender, Age</SelectGenderRegisterTitle>
      <SelectGenderRegisterText>
        Choose a goal so that we can help you effectively
      </SelectGenderRegisterText>

      <Formik
        initialValues={initialValues}
        validationSchema={genderAgeSchema}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(values);
          onNext();
          setSubmitting(false);
        }}
      >
        {({ errors }) => {
          return (
            <RegisterForm>
              <Text>Gender</Text>
              <GenderRadioBtnContainer>
                <RadioButtonContainerStyled>
                  <RadioInputStyle
                    type="radio"
                    id="Male"
                    name="gender"
                    value="Male"
                  />
                  <RadioLabelStyle
                    style={{ width: '120px', textAlign: 'start' }}
                    htmlFor="Male"
                  >
                    Male
                  </RadioLabelStyle>
                </RadioButtonContainerStyled>
                <RadioButtonContainerStyled>
                  <RadioInputStyle
                    type="radio"
                    id="Female"
                    name="gender"
                    value="Female"
                  />
                  <RadioLabelStyle htmlFor="Female">Female</RadioLabelStyle>
                </RadioButtonContainerStyled>
              </GenderRadioBtnContainer>
              <GenderErrorMessage>{errors.gender}</GenderErrorMessage>
              <label htmlFor="age">
                <Text>Your age</Text>
                <SelectGenderInputContainer>
                  <Input
                    type="number"
                    id="age"
                    name="age"
                    placeholder="Enter your age"
                  />
                </SelectGenderInputContainer>
              </label>
              <AgeErrorMessage>{errors.age}</AgeErrorMessage>
              <Button type="submit">Next</Button>
              <ButtonBack onClick={onBack}>Back</ButtonBack>
            </RegisterForm>
          );
        }}
      </Formik>
</div>

    </SelectGenderContainer>
  );
};

export default SelectGenderChoose;
