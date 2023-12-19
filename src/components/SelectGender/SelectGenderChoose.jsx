import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  SelectGenderContainer,
  Image,
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

import SelectGenderImegMobile from '../../img/select_gender/gender-and-age-mobile.png';
import SelectGenderImegTablet from '../../img/select_gender/gender-and-age-tablet.png';
import SelectGenderImegDesktop from '../../img/select_gender/gender-and-age-desktop.png';
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
  gender: Yup.string().required('Select gender').oneOf(['male', 'female']),
  age: Yup.number()
    .required('Specify age')
    .integer('Age must be an integer')
    .min(1, 'Minimum age is 1 year')
    .max(100, 'Maximum age is 100 years'),
});

const SelectGenderChoose = ({ onNext, onBack, onSubmit }) => {
  return (
    <SelectGenderContainer>
      <Image
        src={SelectGenderImegMobile}
        srcSet={`${SelectGenderImegTablet} 834w, ${SelectGenderImegDesktop} 1440w`}
        sizes="(max-width: 833px) 100vw, (min-width: 834px) 50vw"
        alt="Responsive Image"
      />
      <div>
        <SelectGenderRegisterTitle>
          Select gender, Age
        </SelectGenderRegisterTitle>
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
                      id="male"
                      name="gender"
                      value="male"
                    />
                    <RadioLabelStyle
                      style={{ width: '120px', textAlign: 'start' }}
                      htmlFor="male"
                    >
                      Male
                    </RadioLabelStyle>
                  </RadioButtonContainerStyled>
                  <RadioButtonContainerStyled>
                    <RadioInputStyle
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                    />
                    <RadioLabelStyle htmlFor="female">Female</RadioLabelStyle>
                  </RadioButtonContainerStyled>
                </GenderRadioBtnContainer>
                <GenderErrorMessage>{errors.gender}</GenderErrorMessage>
                <label htmlFor="age">
                  <Text>Your age</Text>
                  <SelectGenderInputContainer>
                    <Input
                      type="text"
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
