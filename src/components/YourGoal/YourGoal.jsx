import * as Yup from 'yup';
import { Formik } from 'formik';

import {
  GoalBtnBack,
  GoalBtnNext,
  GoalContainer,
  GoalCustomRadio,
  GoalDescription,
  GoalForm,
  GoalImg,
  GoalLabel,
  GoalList,
  GoalRadioItem,
  GoalTitle,
  GoalErrorMessage,
} from './YourGoal.styled';

const initialValues = {
  goal: '',
};

const goalSchema = Yup.object({
  goal: Yup.string()
    .required('Choose one of the options')
    .oneOf(['Lose fat', 'Maintain', 'Gain Muscle']),
});

export const YourGoal = ({ onNext, onBack, onSubmit }) => {
  return (
    <GoalContainer>
      <GoalImg
        alt="Goal Image"
        src="/src/components/YourGoal/img/IllustrationGoals-min.svg"
      />

      <Formik
        initialValues={initialValues}
        validationSchema={goalSchema}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(values);
          onNext();
          setSubmitting(false);
        }}
      >
        {({ errors }) => {
          return (
            <GoalForm>
              <GoalTitle>Your goal</GoalTitle>
              <GoalDescription>
                Choose a goal so that we can help you effectively
              </GoalDescription>
              <GoalList>
                <GoalRadioItem>
                  <GoalCustomRadio
                    type="radio"
                    id="loseFat"
                    name="goal"
                    value="Lose fat"
                  />
                  <GoalLabel htmlFor="loseFat">Lose Fat</GoalLabel>
                </GoalRadioItem>

                <GoalRadioItem>
                  <GoalCustomRadio
                    type="radio"
                    id="maintain"
                    name="goal"
                    value="Maintain"
                  />
                  <GoalLabel htmlFor="maintain">Maintain</GoalLabel>
                </GoalRadioItem>

                <GoalRadioItem>
                  <GoalCustomRadio
                    type="radio"
                    id="gainMuscle"
                    name="goal"
                    value="Gain Muscle"
                  />
                  <GoalLabel htmlFor="gainMuscle">Gain Muscle</GoalLabel>
                </GoalRadioItem>
              </GoalList>
              <GoalErrorMessage>{errors.goal}</GoalErrorMessage>
              <GoalBtnNext type="submit">Next</GoalBtnNext>
              <GoalBtnBack type="button" onClick={onBack}>
                Back
              </GoalBtnBack>
            </GoalForm>
          );
        }}
      </Formik>
    </GoalContainer>
  );
};
