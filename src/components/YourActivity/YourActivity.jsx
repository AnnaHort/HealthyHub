import {
  FormContainerStyled,
  RadioButtonContainerStyled,
  RadioInputStyle,
  RadioLabelStyle,
  YourActivityBackBtnStyled,
  YourActivityContainerStyled,
  YourActivityFormStyled,
  YourActivityImgStyled,
  YourActivityList,
  YourActivitySignUpBtnStyled,
  YourActivityText,
  YourActivityTitleStyled,
} from './YourActivity.styled';

const YourActivity = ({  onBack }) => {

   return (
    <YourActivityContainerStyled>
      <YourActivityImgStyled src="/src/img/YourActivityImg/illustrationActivity-min.svg" />

      <FormContainerStyled>
        <YourActivityTitleStyled>Your Activity</YourActivityTitleStyled>
        <YourActivityText>
          To correctly calculate calorie and water intake
        </YourActivityText>
        <YourActivityFormStyled action="#">
          <YourActivityList>
            <RadioButtonContainerStyled>

              <RadioInputStyle type="radio" id="radio1" name="radiogroup" tabindex="0"/>
              <RadioLabelStyle htmlFor="radio1">
                1.2 - if you do not have physical activity and sedentary work
              </RadioLabelStyle>
            </RadioButtonContainerStyled>

            <RadioButtonContainerStyled>
              <RadioInputStyle type="radio" id="radio2" name="radiogroup" tabindex="0"/>
              <RadioLabelStyle htmlFor="radio2">
                1.375 - if you do short runs or light gymnastics 1-3 times a
                week
              </RadioLabelStyle>
            </RadioButtonContainerStyled>

            <RadioButtonContainerStyled>
              <RadioInputStyle type="radio" id="radio3" name="radiogroup" tabindex="0"/>
              <RadioLabelStyle htmlFor="radio3">
                1.55 - if you play sports with average loads 3-5 times a week
              </RadioLabelStyle>
            </RadioButtonContainerStyled>

            <RadioButtonContainerStyled>
              <RadioInputStyle type="radio" id="radio4" name="radiogroup" tabindex="0"/>
              <RadioLabelStyle htmlFor="radio4">
                1.725 - if you train fully 6-7 times a week
              </RadioLabelStyle>
            </RadioButtonContainerStyled>

            <RadioButtonContainerStyled>
              <RadioInputStyle type="radio" id="radio5" name="radiogroup" tabindex="0"/>
              <RadioLabelStyle htmlFor="radio5">
                1.9 - if your work is related to physical labor, you train 2
                times a day and include strength exercises in your training
                program
              </RadioLabelStyle>
            </RadioButtonContainerStyled>
          </YourActivityList>

          <YourActivitySignUpBtnStyled type="submit">
            Sign Up
          </YourActivitySignUpBtnStyled>

          <YourActivityBackBtnStyled type="button" onClick={onBack}>
            Back
          </YourActivityBackBtnStyled>
        </YourActivityFormStyled>
      </FormContainerStyled>
    </YourActivityContainerStyled>
  );
};

export default YourActivity;
