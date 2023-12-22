import { useState } from 'react';
import {
  AddButton,
  AddText,
  BtnCancel,
  BtnConfirm,
  Container,
  Description,
  FatAndCalories,
  Form,
  Img,
  ImgDescription,
  InputCalories,
  InputCarbonoh,
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
  };
  return (
    <Container>
      <Title>Record your meal</Title>
      <ImgDescription>
        <Img src="" alt="" />
        <Description>Breakfast</Description>
      </ImgDescription>
      <Form onSubmit={handleSubmit}>
        <InputProduct
          type="text"
          name="product"
          placeholder="The name of the product or dish"
          value={inputValues.product}
          onChange={handleInputChange}
        />

        <InputCarbonoh
          type="text"
          name="carbonoh"
          placeholder="Carbonoh."
          value={inputValues.carbonoh}
          onChange={handleInputChange}
        />

        <InputProtein
          type="text"
          name="protein"
          placeholder="Protein"
          value={inputValues.protein}
          onChange={handleInputChange}
        />
        <FatAndCalories>
          <InputFat
            type="text"
            name="fat"
            placeholder="Fat"
            value={inputValues.fat}
            onChange={handleInputChange}
          />
          <InputCalories
            type="text"
            name="calories"
            placeholder="Calories"
            value={inputValues.calories}
            onChange={handleInputChange}
          />
          <Trash />
        </FatAndCalories>
      </Form>
      <AddButton>
        <Add />
        <AddText>Add more</AddText>
      </AddButton>
      <BtnConfirm>Confirm</BtnConfirm>
      <BtnCancel>Cancel</BtnCancel>
    </Container>
  );
};

export default RecordDiaryModal;
