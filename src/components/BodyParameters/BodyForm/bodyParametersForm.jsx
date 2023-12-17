import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  BodyFormContainer,
  FormStyled,
  LabelForm,
  FieldStyled,
    BodyParamsBackButton,
  BodyParamsNextButton,
} from './bodyParametersForm.styled';

const SignupSchems = Yup.object().shape({
  weight: Yup.number().required('Required'),
  height: Yup.number().required('Required'),
});

export const FormBodyParameters = () => {
  return (
    <BodyFormContainer>
      <Formik
        initialValues={{
          height: '',
          weight: '',
        }}
        validationSchema={SignupSchems}
        onSubmit={(values) => {
          // Обработка отправки формы
          console.log(values);
        }}
      >
        <FormStyled>
          <LabelForm htmlFor="height">Height</LabelForm>
          <FieldStyled
            name="height"
            type="number" // Используйте type="number" для числового ввода
            required
            placeholder="Enter your height"
          />
          <ErrorMessage name="height" component="div" />

          <LabelForm htmlFor="weight">Weight</LabelForm>
          <FieldStyled
            name="weight"
            type="number" // Используйте type="number" для числового ввода
            required
            placeholder="Enter your weight"
          />
          <ErrorMessage name="weight" component="div" />

          <div>
            <BodyParamsNextButton type="submit">Next</BodyParamsNextButton>
            <BodyParamsBackButton type="button">Back</BodyParamsBackButton>
          </div>
        </FormStyled>
      </Formik>
    </BodyFormContainer>
  );

};
