import {
  InputContainerStyled,
  YourActivityContainerStyled,
  YourActivityImgStyled,
  YourActivityLabelStyled,
  YourActivityList,
  YourActivityListEStyled,
  YourActivitySignUpBtnStyled,
  YourActivityText,
  YourActivityTitleStyled,
} from './YourActivity.styled';

const YourActivity = () => {
  return (
    <YourActivityContainerStyled>
      <YourActivityImgStyled src="/src/img/illustrationActivity.png" />

      <YourActivityTitleStyled>Your Activity</YourActivityTitleStyled>
      <YourActivityText>
        To correctly calculate calorie and water intake
      </YourActivityText>
      <form action="#">
        <YourActivityList>
          <YourActivityListEStyled>
            
            <InputContainerStyled>
              <input type="radio" value="1" name="activityLevel" />
            </InputContainerStyled>
            
            <YourActivityLabelStyled htmlFor="activityOption1">
              1.2 - if you do not have physical activity and sedentary work
            </YourActivityLabelStyled>
          </YourActivityListEStyled>

          <YourActivityListEStyled>
            <InputContainerStyled>
              <input type="radio" value="2" name="activityLevel" />
            </InputContainerStyled>

            <YourActivityLabelStyled htmlFor="activityOption2">
              1.375 - if you do short runs or light gymnastics 1-3 times a week
            </YourActivityLabelStyled>
          </YourActivityListEStyled>

          <YourActivityListEStyled>
            <InputContainerStyled>
              <input type="radio" value="3" name="activityLevel" />
            </InputContainerStyled>

            <YourActivityLabelStyled htmlFor="activityOption3">
              1.55 - if you play sports with average loads 3-5 times a week
            </YourActivityLabelStyled>
          </YourActivityListEStyled>

          <YourActivityListEStyled>
            <InputContainerStyled>
              <input type="radio" value="4" name="activityLevel" />
            </InputContainerStyled>

            <YourActivityLabelStyled htmlFor="activityOption4">
              1.725 - if you train fully 6-7 times a week
            </YourActivityLabelStyled>
          </YourActivityListEStyled>

          <YourActivityListEStyled>
            <InputContainerStyled>
              <input type="radio" value="5" name="activityLevel" />
            </InputContainerStyled>

            <YourActivityLabelStyled htmlFor="activityOption5">
              1.9 - if your work is related to physical labor, you train 2 times
              a day and include strength exercises in your training program
            </YourActivityLabelStyled>
          </YourActivityListEStyled>
        </YourActivityList>

        <YourActivitySignUpBtnStyled type="submit">
          Sign Up
        </YourActivitySignUpBtnStyled>
        <YourActivitySignUpBtnStyled type="button">
          Back
        </YourActivitySignUpBtnStyled>
      </form>
    </YourActivityContainerStyled>
  );
};

export default YourActivity;
