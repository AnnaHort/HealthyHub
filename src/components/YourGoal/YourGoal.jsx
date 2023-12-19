//import * as Yup from 'yup';
//import { Formik } from 'formik';

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
} from './YourGoal.styled';

export const YourGoal = ({ onNext, onBack }) => {
  const handleSubmit = () => {
    onNext();
  };

  return (
    <GoalContainer>
      <GoalImg
        alt="Goal Image"
        src="/src/components/YourGoal/img/IllustrationGoals-min.svg"
      />
      <GoalForm onSubmit={handleSubmit}>
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
              value="Lose Fat"
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
        <GoalBtnNext>Next</GoalBtnNext>

        <GoalBtnBack type="button" onClick={onBack}>
          Back
        </GoalBtnBack>
      </GoalForm>
    </GoalContainer>
  );
};
