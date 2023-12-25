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
  Form,
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

import {Backdrop} from '../MainPage/AddWaterModal/AddWaterModal.styled'

import { ReactComponent as Trash } from '../../img/MainPages/trash.svg';
import { ReactComponent as Add } from '../../img/RecordDiaryModal/add_green.svg';

const RecordDiaryModal = ({onClose}) => {
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
    const updatedEntries = [...mealEntries];
    updatedEntries[index] = {
      ...updatedEntries[index],
      [name]: value,
    };
    setMealEntries(updatedEntries);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Код для обробки введених даних та оновлення масиву mealEntries
    console.log('Введені значення:', mealEntries);
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

  return (
    <Backdrop onClick={handleCloseModal}>
      <Container>
        <Title>Record your meal</Title>
        <ImgDescriptionContainer>
          <Img src="" alt="" />
          <Description>Breakfast</Description>
        </ImgDescriptionContainer>
        <Form onSubmit={handleSubmit}>
          <ScrollableContainer>
            {mealEntries.map((entry, index) => (
              <InputContainer key={index}>
                <InputProduct
                  type="text"
                  name="product"
                  placeholder="The name of the product or dish"
                  value={entry.product}
                  autoComplete="off"
                  onChange={(e) => handleInputChange(e, index)}
                />

                <InputCarbonoh
                  type="number"
                  name="carbonoh"
                  placeholder="Carbonoh."
                  value={entry.carbonoh}
                  autoComplete="off"
                  onChange={(e) => handleInputChange(e, index)}
                />

                <InputProtein
                  type="number"
                  name="protein"
                  placeholder="Protein"
                  value={entry.protein}
                  autoComplete="off"
                  onChange={(e) => handleInputChange(e, index)}
                />
                <FatAndCalories>
                  <InputFat
                    type="number"
                    name="fat"
                    placeholder="Fat"
                    value={entry.fat}
                    autoComplete="off"
                    onChange={(e) => handleInputChange(e, index)}
                  />
                  <InputCalories
                    type="number"
                    name="calories"
                    placeholder="Calories"
                    value={entry.calories}
                    autoComplete="off"
                    onChange={(e) => handleInputChange(e, index)}
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
        </Form>
      </Container>
    </Backdrop>
  );
};

export default RecordDiaryModal;
