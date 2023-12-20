import { Formik } from 'formik';
import * as Yup from 'yup';
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
  ActivityErrorMessage,
} from './YourActivity.styled';

const initialValues = {
  activity: '',
};

const YourActivitylSchema = Yup.object({
  activity: Yup.string()
    .required('Сhoose your activity level')
    .oneOf([
      'low 1.2-1.3',
      'light 1.4-1.5',
      'average 1.6-1.7',
      'high 1.8-1.9',
      'hard 2.0',
    ]),
});

const YourActivity = ({ onBack, onSubmit }) => {
  return (
    <YourActivityContainerStyled>
      <YourActivityImgStyled src="/src/img/YourActivityImg/illustrationActivity-min.svg" />

      <FormContainerStyled>
        <YourActivityTitleStyled>Your Activity</YourActivityTitleStyled>
        <YourActivityText>
          To correctly calculate calorie and water intake
        </YourActivityText>
        <Formik
          initialValues={initialValues}
          validationSchema={YourActivitylSchema}
          onSubmit={(values, { setSubmitting }) => {
            onSubmit(values);
            setSubmitting(false);
          }}
        >
          {({ errors }) => {
            return (
              <YourActivityFormStyled action="#">
                <YourActivityList>
                  <RadioButtonContainerStyled>
                    <RadioInputStyle
                      type="radio"
                      id="low 1.2-1.3"
                      value="low 1.2-1.3"
                      name="activity"
                    />
                    <RadioLabelStyle htmlFor="low 1.2-1.3">
                      1.2-1.3 - if you do not have physical activity and
                      sedentary work
                    </RadioLabelStyle>
                  </RadioButtonContainerStyled>

                  <RadioButtonContainerStyled>
                    <RadioInputStyle
                      type="radio"
                      id="light 1.4-1.5"
                      value="light 1.4-1.5"
                      name="activity"
                    />
                    <RadioLabelStyle htmlFor="light 1.4-1.5">
                      1.4-1.5 - if you do short runs or light gymnastics 1-3
                      times a week
                    </RadioLabelStyle>
                  </RadioButtonContainerStyled>

                  <RadioButtonContainerStyled>
                    <RadioInputStyle
                      type="radio"
                      id="average 1.6-1.7"
                      value="average 1.6-1.7"
                      name="activity"
                    />
                    <RadioLabelStyle htmlFor="average 1.6-1.7">
                      1.6-1.7 - if you play sports with average loads 3-5 times
                      a week
                    </RadioLabelStyle>
                  </RadioButtonContainerStyled>

                  <RadioButtonContainerStyled>
                    <RadioInputStyle
                      type="radio"
                      id="high 1.8-1.9"
                      value="high 1.8-1.9"
                      name="activity"
                    />
                    <RadioLabelStyle htmlFor="high 1.8-1.9">
                      1.8-1.9 - if you train fully 6-7 times a week
                    </RadioLabelStyle>
                  </RadioButtonContainerStyled>

                  <RadioButtonContainerStyled>
                    <RadioInputStyle
                      type="radio"
                      id="hard 2.0"
                      value="hard 2.0"
                      name="activity"
                    />
                    <RadioLabelStyle htmlFor="hard 2.0">
                      2.0 - if your work is related to physical labor, you train
                      2 times a day and include strength exercises in your
                      training program
                    </RadioLabelStyle>
                  </RadioButtonContainerStyled>
                </YourActivityList>
                <ActivityErrorMessage>{errors.activity}</ActivityErrorMessage>
                <YourActivitySignUpBtnStyled type="submit">
                  Sign Up
                </YourActivitySignUpBtnStyled>

                <YourActivityBackBtnStyled type="button" onClick={onBack}>
                  Back
                </YourActivityBackBtnStyled>
              </YourActivityFormStyled>
            );
          }}
        </Formik>
      </FormContainerStyled>
    </YourActivityContainerStyled>
  );
};

export default YourActivity;
