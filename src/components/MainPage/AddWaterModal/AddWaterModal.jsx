import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import {
  Backdrop,
  CancelButton,
  ConfirmButton,
  ErrorText,
  InputField,
  Title,
  WaterForm,
  WaterModal,
  WaterLable,
} from './AddWaterModal.styled';

import { addWater } from '../../../redux/userStatsDay/operations';
import { fetchUserStatsDay } from '../../../redux/userStatsDay/operations';

const validationSchema = Yup.object({
  waterIntake: Yup.number().required('Required'),
});

export const AddWaterModal = ({ handleModal }) => {
  const dispatch = useDispatch();

  const handleCloseModal = (e) => {
    (e.code === 'Escape' || e.currentTarget === e.target) && handleModal();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);
    return () => {
      window.removeEventListener('keydown', handleCloseModal);
    };
  });

  function formatDate(date) {
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yyyy = date.getFullYear();
    if (yyyy < 10) yyyy = '0' + yyyy;

    return yyyy + '-' + mm + '-' + dd;
  }

  const handleSubmit = (values, { resetForm }) => {
    const { waterIntake } = values;
    dispatch(
      addWater({ amount: `${waterIntake}`, date: `${formatDate(new Date())}` })
    );
    dispatch(fetchUserStatsDay());

    resetForm();
    handleModal();
  };

  useEffect(() => {
    dispatch(fetchUserStatsDay());
  }, [dispatch]);

  return (
    <Backdrop onClick={handleCloseModal}>
      <WaterModal>
        <Title>Add water intake</Title>
        <Formik
          initialValues={{ waterValue: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <WaterForm>
              <WaterLable htmlFor="waterIntake">How much water</WaterLable>
              <InputField
                autoFocus
                name="waterIntake"
                type="number"
                min={0}
                placeholder="Enter milliliters"
                borderstyle={
                  errors.waterIntake && touched.waterIntake
                    ? '1px solid red'
                    : ''
                }
              />
              <ErrorMessage name="waterIntake">
                {(msg) => (
                  <ErrorText>Required. This is numeric value</ErrorText>
                )}
              </ErrorMessage>
              <ConfirmButton type="submit">Confirm</ConfirmButton>
              <CancelButton type="button" onClick={handleModal}>
                Cancel
              </CancelButton>
            </WaterForm>
          )}
        </Formik>
      </WaterModal>
    </Backdrop>
  );
};
