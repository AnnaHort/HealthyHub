import {
  SelectGenderContainer,
  Image,
  RegisterTitle,
  RegisterText,
  RadioButtonText,
  Text,
  RegisterForm,
  InputContainer,
  Input,
  Button,
  ButtonBack,
} from './SelectGender.styled';

import SelectGenderImegMobile from '../../img/select_gender/gender-and-age-mobile.png';
import SelectGenderImegTablet from '../../img/select_gender/gender-and-age-tablet.png';
import SelectGenderImegDesktop from '../../img/select_gender/gender-and-age-desktop.png';

const SelectGenderChoose = () => {
  return (
    <SelectGenderContainer>
      <Image
        src={SelectGenderImegMobile}
        srcSet={`${SelectGenderImegTablet} 834w, ${SelectGenderImegDesktop} 1440w`}
        sizes="(max-width: 833px) 100vw, (min-width: 834px) 50vw"
        alt="Responsive Image"
      />
      <div>
        <RegisterTitle>Select gender, Age</RegisterTitle>
        <RegisterText>
          Choose a goal so that we can help you effectively
        </RegisterText>
        <RegisterForm>
          <RadioButtonText>Gender</RadioButtonText>
          <label className="radioButton">
            <input type="radio" name="radio_1" />
            <input type="radio" name="radio_2" />
          </label>
          <label htmlFor="password">
            <Text>Your age</Text>
            <InputContainer>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your age"
              />
            </InputContainer>
          </label>
          <Button type="submit">Next</Button>
          <ButtonBack>Back</ButtonBack>
        </RegisterForm>
      </div>
    </SelectGenderContainer>
  );
};

export default SelectGenderChoose;
