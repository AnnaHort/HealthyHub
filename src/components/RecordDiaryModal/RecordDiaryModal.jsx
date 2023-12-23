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
  Title,
} from './RecordDiaryModal.styled';

import { ReactComponent as Trash } from '../../img/MainPages/trash.svg';
import { ReactComponent as Add } from '../../img/RecordDiaryModal/add_green.svg';

const RecordDiaryModal = () => {
  const [inputValues, setInputValues] = useState({
    product: '',
    carbonoh: '',
    protein: '',
    fat: '',
    calories: '',
  });

  // Обробник подій для оновлення значень інпутів
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Обробник подій для відправки форми
  const handleSubmit = (e) => {
    e.preventDefault();
    // Додайте код для обробки введених даних тут
    console.log('Введені значення:', inputValues);

    setInputValues({
      product: '',
      carbonoh: '',
      protein: '',
      fat: '',
      calories: '',
    });
  };

  return (
    <Container>
      <Title>Record your meal</Title>
      <ImgDescriptionContainer>
        <Img src="" alt="" />
        <Description>Breakfast</Description>
      </ImgDescriptionContainer>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <InputProduct
            type="text"
            name="product"
            placeholder="The name of the product or dish"
            value={inputValues.product}
            onChange={handleInputChange}
          />

          <InputCarbonoh
            type="number"
            name="carbonoh"
            placeholder="Carbonoh."
            value={inputValues.carbonoh}
            onChange={handleInputChange}
          />

          <InputProtein
            type="number"
            name="protein"
            placeholder="Protein"
            value={inputValues.protein}
            onChange={handleInputChange}
          />
          <FatAndCalories>
            <InputFat
              type="number"
              name="fat"
              placeholder="Fat"
              value={inputValues.fat}
              onChange={handleInputChange}
            />
            <InputCalories
              type="number"
              name="calories"
              placeholder="Calories"
              value={inputValues.calories}
              onChange={handleInputChange}
            />
            <Trash />
          </FatAndCalories>
        </InputContainer>

        <AddButton>
          <Add />
          <AddText>Add more</AddText>
        </AddButton>
        <ButtonContainer>
          <BtnConfirm type="submit">Confirm</BtnConfirm>
          <BtnCancel>Cancel</BtnCancel>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default RecordDiaryModal;
