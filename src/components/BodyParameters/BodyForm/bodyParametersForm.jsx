import { Formik, ErrorMessage } from 'formik';
import {
  BodyFormContainer,
  FormStyled,
  LabelForm,
  FieldStyled,
    BodyParamsBackButton,
  BodyParamsNextButton,
} from './bodyParametersForm.styled';

export const FormBodyParameters = ({ onBack, onNext }) => {

  return (
    <BodyFormContainer>
      <Formik
        initialValues={{
          height: '',
          weight: '',
        }}
        onSubmit={(values) => {
          // Обработка отправки формы
          console.log(values);
          onNext();
        }}
      >
        <FormStyled >
          <LabelForm htmlFor="height">Height</LabelForm>
          <FieldStyled
            name="height"
            type="number"
            required
            placeholder="Enter your height"
          />
          <ErrorMessage name="height" component="div" />

          <LabelForm htmlFor="weight">Weight</LabelForm>
          <FieldStyled
            name="weight"
            type="number"
            required
            placeholder="Enter your weight"
          />
          <ErrorMessage name="weight" component="div" />

          <div>
            <BodyParamsNextButton type="submit">Next</BodyParamsNextButton>
            <BodyParamsBackButton type="button" onClick={onBack}>
              Back
            </BodyParamsBackButton>
          </div>
        </FormStyled>
      </Formik>
    </BodyFormContainer>
  );

};
