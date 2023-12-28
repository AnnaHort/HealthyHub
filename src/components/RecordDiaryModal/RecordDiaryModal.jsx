import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUserStatsDay } from '../../redux/userStatsDay/operations';

import { Formik, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';

import { addFood } from '../../redux/userStatsDay/operations';

import { Backdrop } from '../MainPage/AddWaterModal/AddWaterModal.styled';

import {
  Container,
  ScrollableContainer,
  InputContainer,
  InputProduct,
  InputCarbonoh,
  InputProtein,
  InputFat,
  InputCalories,
  Title,
  DiaryForm,
  Description,
  ImgDescriptionContainer,
  ErrorText,
  AddButton,
  AddText,
  BtnConfirm,
  BtnCancel,
  ButtonContainer,
  DelButton,
} from './RecordDiaryModal.styled';

import { ReactComponent as BreakfastImg } from '../../img/Diary/breakfast.svg';
import { ReactComponent as LunchImg } from '../../img/Diary/lunch.svg';
import { ReactComponent as DinnerImg } from '../../img/Diary/dinner.svg';
import { ReactComponent as SnackImg } from '../../img/Diary/snack.svg';
import { ReactComponent as Trash } from '../../img/MainPages/trash.svg';
import { ReactComponent as Add } from '../../img/RecordDiaryModal/add_green.svg';

const validationSchema = Yup.object({
  fields: Yup.array().of(
    Yup.object({
      dishName: Yup.string().required('Please Enter product name'),
      carbonohidrates: Yup.number()
        .min(0, 'You cannot enter less than 0')
        .required('Please enter Carboh.'),
      protein: Yup.number()
        .min(0, 'You cannot enter less than 0')
        .required('Please enter Protein'),
      fat: Yup.number()
        .min(0, 'You cannot enter less than 0')
        .required('Please enter Fat'),
      calories: Yup.number()
        .min(0, 'You cannot enter less than 0')
        .required('Please enter Calories'),
    })
  ),
});

const RecordDiaryModal = ({ onClose, selectedMeal }) => {
  const dispatch = useDispatch();

  const typeMeal = selectedMeal.toLowerCase();
  const initialValues = {
    fields: [
      {
        ident: uuidv4(),
        mealType: `${typeMeal}`,
        date: `${formatDate(new Date())}`,
        dishName: '',
        carbonohidrates: '',
        protein: '',
        fat: '',
        calories: '',
      },
    ],
  };

  const [formData, setFormData] = useState({
    fields: [
      {
        ident: uuidv4(),
        mealType: `${typeMeal}`,
        date: `${formatDate(new Date())}`,
        dishName: '',
        carbonohidrates: '',
        protein: '',
        fat: '',
        calories: '',
      },
    ],
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

  const handleAddMore = (e) => {
    e.preventDefault();
    setFormData({
      fields: [
        ...formData.fields,
        {
          ident: uuidv4(),
          mealType: `${typeMeal}`,
          date: `${formatDate(new Date())}`,
          dishName: '',
          carbonohidrates: '',
          protein: '',
          fat: '',
          calories: '',
        },
      ],
    });
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const handleChange = (ident, fieldId, newValue) => {
    const updatedFields = formData.fields.map((field) =>
      field.ident === ident ? { ...field, [fieldId]: newValue } : field
    );
    setFormData({ fields: updatedFields });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    formData.fields.map((field) => {
      const { ident, ...rest } = field;
      dispatch(addFood(rest));
    });

    dispatch(fetchUserStatsDay());
    onClose();
  };

  const handleDelete = (index) => {
    let updatedFields = formData.fields.filter(
      (field) => field.ident !== index
    );
    setFormData({ fields: updatedFields });
  };

  return (
    <Backdrop onClick={handleOverlayClick}>
      <Container>
        <Title>Record your meal</Title>
        {typeMeal === 'breakfast' && (
          <ImgDescriptionContainer>
            <BreakfastImg />
            <Description>Breakfast</Description>
          </ImgDescriptionContainer>
        )}
        {typeMeal === 'lunch' && (
          <ImgDescriptionContainer>
            <LunchImg />
            <Description>Lunch</Description>
          </ImgDescriptionContainer>
        )}
        {typeMeal === 'dinner' && (
          <ImgDescriptionContainer>
            <DinnerImg />
            <Description>Dinner</Description>
          </ImgDescriptionContainer>
        )}
        {typeMeal === 'snack' && (
          <ImgDescriptionContainer>
            <SnackImg />
            <Description>Snack</Description>
          </ImgDescriptionContainer>
        )}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnBlur={true}
          validateOnChange={false}
        >
          {({ errors, touched, isValid }) => {
            return (
              <DiaryForm onSubmit={handleSubmit}>
                <ScrollableContainer>
                  {formData.fields.map((field) => (
                    <InputContainer key={field.ident}>
                      <Field
                        as={InputProduct}
                        name={`${field.ident}.dishName`}
                        type="string"
                        value={field.dishName}
                        onChange={(e) =>
                          handleChange(field.ident, 'dishName', e.target.value)
                        }
                        placeholder="The name of the product or dish"
                        borderstyle={
                          errors.dishName && touched.dishName
                            ? '1px solid red'
                            : ''
                        }
                      />
                      <ErrorMessage name={`${field.ident}.dishName`}>
                        {(msg) => <ErrorText>{msg}</ErrorText>}
                      </ErrorMessage>
                      <Field
                        as={InputCarbonoh}
                        name={`${field.ident}.carbonohidrates`}
                        type="number"
                        value={field.carbonohidrates}
                        min={0}
                        onChange={(e) =>
                          handleChange(
                            field.ident,
                            'carbonohidrates',
                            e.target.value
                          )
                        }
                        placeholder="Carbonohidrates."
                        borderstyle={
                          errors.carbonohidrates && touched.carbonohidrates
                            ? '1px solid red'
                            : ''
                        }
                      />
                      <ErrorMessage name={`${field.ident}.carbonohidrates`}>
                        {(msg) => <ErrorText>{msg}</ErrorText>}
                      </ErrorMessage>
                      <Field
                        as={InputProtein}
                        name={`${field.ident}.protein`}
                        type="number"
                        value={field.protein}
                        min={0}
                        onChange={(e) =>
                          handleChange(field.ident, 'protein', e.target.value)
                        }
                        placeholder="Protein"
                        borderstyle={
                          errors.protein && touched.protein
                            ? '1px solid red'
                            : ''
                        }
                      />
                      <ErrorMessage name={`${field.ident}.protein`}>
                        {(msg) => <ErrorText>{msg}</ErrorText>}
                      </ErrorMessage>
                      <Field
                        as={InputFat}
                        name={`${field.ident}.fat`}
                        type="number"
                        value={field.fat}
                        min={0}
                        onChange={(e) =>
                          handleChange(field.ident, 'fat', e.target.value)
                        }
                        placeholder="Fat"
                        borderstyle={
                          errors.fat && touched.fat ? '1px solid red' : ''
                        }
                      />
                      <ErrorMessage name={`${field.ident}.fat`}>
                        {(msg) => <ErrorText>{msg}</ErrorText>}
                      </ErrorMessage>
                      <Field
                        as={InputCalories}
                        name={`${field.ident}.calories`}
                        type="number"
                        value={field.calories}
                        min={0}
                        onChange={(e) =>
                          handleChange(field.ident, 'calories', e.target.value)
                        }
                        placeholder="Calories"
                        borderstyle={
                          errors.calories && touched.calories
                            ? '1px solid red'
                            : ''
                        }
                      />
                      <ErrorMessage name={`${field.ident}.calories`}>
                        {(msg) => <ErrorText>{msg}</ErrorText>}
                      </ErrorMessage>
                      <DelButton>
                        <Trash onClick={() => handleDelete(field.ident)} />
                      </DelButton>
                    </InputContainer>
                  ))}
                  <AddButton type="button" onClick={handleAddMore}>
                    <Add />
                    <AddText>Add more</AddText>
                  </AddButton>
                </ScrollableContainer>
                <ButtonContainer>
                  <BtnConfirm type="submit">Confirm</BtnConfirm>
                  <BtnCancel onClick={onClose}>Cancel</BtnCancel>
                </ButtonContainer>
              </DiaryForm>
            );
          }}
        </Formik>
      </Container>
    </Backdrop>
  );
};

export default RecordDiaryModal;
