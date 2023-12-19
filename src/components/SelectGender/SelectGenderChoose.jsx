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
} from './SelectGender.styled';

import SelectGenderImegMobile from '../../img/select_gender/gender-and-age-mobile.png';
import SelectGenderImegTablet from '../../img/select_gender/gender-and-age-tablet.png';
import SelectGenderImegDesktop from '../../img/select_gender/gender-and-age-desktop.png';
import {
  RadioButtonContainerStyled,
  RadioInputStyle,
  RadioLabelStyle,
} from '../YourActivity/YourActivity.styled';

const SelectGenderChoose = ({ onNext, onBack }) => {

  const handleSubmit = () => {
    onNext();
  };
  

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
        <RegisterForm onSubmit={handleSubmit}>
          <Text>Gender</Text>
          <GenderRadioBtnContainer>
            <RadioButtonContainerStyled>
              <RadioInputStyle type="radio" id="male" name="radiogroup" />
              <RadioLabelStyle
                style={{ width: '120px', textAlign: 'start' }}
                htmlFor="male"
              >
                Male
              </RadioLabelStyle>
            </RadioButtonContainerStyled>

            <RadioButtonContainerStyled>
              <RadioInputStyle type="radio" id="female" name="radiogroup" />
              <RadioLabelStyle htmlFor="female">Female</RadioLabelStyle>
            </RadioButtonContainerStyled>
          </GenderRadioBtnContainer>

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

          <Button type="submit">Next</Button>
          <ButtonBack onClick={onBack}>Back</ButtonBack>
        </RegisterForm>
      </div>
    </SelectGenderContainer>
  );
};

export default SelectGenderChoose;
