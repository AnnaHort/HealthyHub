import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  BodyFormContainer,
  FormStyled,
  LabelForm,
  FieldStyled,
  BodyParamsBackButton,
  BodyParamsNextButton,
  HeightErrorMessage,
  WeightErrorMessage,
} from './bodyParametersForm.styled';

const initialValues = {
  height: '',
  weight: '',
};

const bodyParamsSchema = Yup.object().shape({
  weight: Yup.number()
    .required('Weight is required')
    .min(1, 'Weight should be greater than 0')
    .positive('Weight should be a positive number'),
  height: Yup.number()
    .required('Height is required')
    .min(1, 'Height should be greater than 0')
    .positive('Height should be a positive number'),
});

export const FormBodyParameters = ({ onBack, onNext, onSubmit }) => {
  return (
    <BodyFormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={bodyParamsSchema}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(values);
          onNext();
          setSubmitting(false);
        }}
      >
        {({ errors }) => {
          return (
            <FormStyled>
              <LabelForm htmlFor="height">Height</LabelForm>
              <FieldStyled
                name="height"
                type="number"
                id="height"
                placeholder="Enter your height"
              />
              <HeightErrorMessage>{errors.height}</HeightErrorMessage>

              <LabelForm htmlFor="weight">Weight</LabelForm>
              <FieldStyled
                name="weight"
                type="number"
                id="weight"
                placeholder="Enter your weight"
              />
              <WeightErrorMessage>{errors.weight}</WeightErrorMessage>

              <div>
                <BodyParamsNextButton type="submit">Next</BodyParamsNextButton>
                <BodyParamsBackButton type="button" onClick={onBack}>
                  Back
                </BodyParamsBackButton>
              </div>
            </FormStyled>
          );
        }}
      </Formik>
    </BodyFormContainer>
  );
};
