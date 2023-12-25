import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useState } from 'react';
import {
  AddButton,
  AddText,
  BtnCancel,
  BtnConfirm,
  ButtonContainer,
  Container,
  Description,
  FatAndCalories,
  DiaryForm,
  Img,
  ImgDescriptionContainer,
  InputCalories,
  InputCarbonoh,
  InputContainer,
  InputFat,
  InputProduct,
  InputProtein,
  ScrollableContainer,
  Title,
} from './RecordDiaryModal.styled';

import { addFood } from '../../redux/userStatsDay/operations';
import { fetchUserStatsDay } from '../../redux/userStatsDay/operations';

import { Backdrop } from '../MainPage/AddWaterModal/AddWaterModal.styled';

import { ReactComponent as Trash } from '../../img/MainPages/trash.svg';
import { ReactComponent as Add } from '../../img/RecordDiaryModal/add_green.svg';

const initialValues = {
  mealEntries: [
    {
      product: '',
      carbonoh: '',
      protein: '',
      fat: '',
      calories: '',
    },
  ],
};

const DiarySchema = Yup.object().shape({
  mealEntries: Yup.array().of(
    Yup.object().shape({
      product: Yup.string().required('Please Enter product name'),
      carbonoh: Yup.number()
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
  const [mealEntries, setMealEntries] = useState([
    {
      product: '',
      carbonoh: '',
      protein: '',
      fat: '',
      calories: '',
    },
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const fieldName = name.split('.').pop();
    const updatedEntries = [...mealEntries];
    updatedEntries[index] = {
      ...updatedEntries[index],
      [fieldName]: value,
    };
    setMealEntries(updatedEntries);
  };

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
    const formattedDate = formatDate(new Date());
    const dataToSend = {
      dishName: values.mealEntries[0].product,
      mealType: selectedMeal.title,
      calories: values.mealEntries[0].calories,
      date: formattedDate,
      carbonohidrates: values.mealEntries[0].carbonoh,
      fat: values.mealEntries[0].fat,
      protein: values.mealEntries[0].protein,
    };

    console.log(dataToSend);
    dispatch(addFood(dataToSend));
    dispatch(fetchUserStatsDay());

    resetForm();
  };

  const handleAddMore = () => {
    // Додає новий блок інпутів до масиву mealEntries
    setMealEntries((prevEntries) => [
      ...prevEntries,
      {
        product: '',
        carbonoh: '',
        protein: '',
        fat: '',
        calories: '',
      },
    ]);
  };

  const handleDelete = (index) => {
    // Видалення блоку інпутів за вказаним індексом
    setMealEntries((prevEntries) => [
      ...prevEntries.slice(0, index),
      ...prevEntries.slice(index + 1),
    ]);
  };

  const handleCloseModal = (e) => {
    (e.code === 'Escape' || e.currentTarget === e.target) && onClose();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);
    return () => {
      window.removeEventListener('keydown', handleCloseModal);
    };
  });

  return (
    <Backdrop onClick={handleCloseModal}>
      <Container>
        <Title>Record your meal</Title>
        <ImgDescriptionContainer>
          {selectedMeal.image && (
            <Img src={selectedMeal.image} alt={selectedMeal.title} />
          )}
          <Description>{selectedMeal.title}</Description>
        </ImgDescriptionContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={DiarySchema}
          onSubmit={handleSubmit}
          validateOnChange={true}
        >
          {({ isValid }) => {
            return (
              <DiaryForm onSubmit={handleSubmit} autoComplete="off">
                <ScrollableContainer>
                  {mealEntries.map((entry, index) => (
                    <InputContainer key={index}>
                      <InputProduct
                        type="text"
                        name={`mealEntries[${index}].product`}
                        placeholder="The name of the product or dish"
                        value={entry.product}
                        onChange={(e) => handleInputChange(e, index)}
                      />
                      <ErrorMessage
                        name={`mealEntries[${index}].product`}
                        component="div"
                        style={{ color: '#e74a3b', display: 'block' }}
                      />

                      <InputCarbonoh
                        type="number"
                        name={`mealEntries[${index}].carbonoh`}
                        placeholder="Carbonoh"
                        value={entry.carbonoh}
                        onChange={(e) => handleInputChange(e, index)}
                      />
                      <ErrorMessage
                        name={`mealEntries[${index}].carbonoh`}
                        component="div"
                        style={{
                          color: '#e74a3b',
                          display: isValid ? 'none' : 'block',
                        }}
                      />
                      <InputProtein
                        type="number"
                        name={`mealEntries[${index}].protein`}
                        placeholder="Protein"
                        value={entry.protein}
                        onChange={(e) => handleInputChange(e, index)}
                      />
                      <ErrorMessage
                        name={`mealEntries[${index}].protein`}
                        component="div"
                        style={{ color: '#e74a3b' }}
                      />
                      <FatAndCalories>
                        <InputFat
                          type="number"
                          name={`mealEntries[${index}].fat`}
                          placeholder="Fat"
                          value={entry.fat}
                          onChange={(e) => handleInputChange(e, index)}
                        />
                        <ErrorMessage
                          name={`mealEntries[${index}].fat`}
                          component="div"
                          style={{ color: '#e74a3b' }}
                        />
                        <InputCalories
                          type="number"
                          name={`mealEntries[${index}].calories`}
                          placeholder="Calories"
                          value={entry.calories}
                          autoComplete="off"
                          onChange={(e) => handleInputChange(e, index)}
                        />
                        <ErrorMessage
                          name={`mealEntries[${index}].calories`}
                          component="div"
                          style={{ color: '#e74a3b' }}
                        />
                        <Trash onClick={() => handleDelete(index)} />
                      </FatAndCalories>
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
