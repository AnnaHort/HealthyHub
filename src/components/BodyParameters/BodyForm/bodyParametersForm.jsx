import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';

// const SignupSchems = Yup.object().shape({
//   weight: Yup.number().required('Required'),
//   height: Yup.number().required('Required')
// })

const FormBodyParameters = () => {
  return (
    <div>
      <Formik
        initialValues={{
          height: '',
          weight: '',
        }}
      >
        <Form>
          <label htmlFor="Height"></label>
          <Field
            name="height"
            type="text"
            required
            placeholder="Enter your height"
          />
          <label htmlFor="Weight" type="text"></label>
          <Field name="weight" required placeholder="Enter your weight" />
        </Form>

        <button>
          <a href="#">Next</a>
        </button>
        <button>
          <a href="#">Back</a>
        </button>
      </Formik>
    </div>
  );
};

export default FormBodyParameters;
