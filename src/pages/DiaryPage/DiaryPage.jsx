// import DiaryMealList from '../../components/DiaryMeal/DiaryMealList';

import {
  DiaryTop,
  DiaryTitle,
  DiaryContainer,
  RecordContainer,
  DiaryText,
  DiaryImg,
  DearyButton,
  DiaryBox,
  DiarySendBack,
  NumberWindow,
  ButtonPlus,
} from './DiaryPage.styled';

import BreakfastImg from '../../img/Diary/breakfast.svg';
import LunchImg from '../../img/Diary/lunch.svg';
import DiaryBack from '../../img/Diary/arrow-back.svg';
import DinnerImg from '../../img/Diary/dinner.svg';
import SnackImg from '../../img/Diary/snack.svg';
import ButtonSvg from '../../img/Diary/plus.svg';

const DiaryPage = () => {
  return (
    <DiaryContainer>
      <DiarySendBack href="/main">
        <DiaryTop>
          <DiaryImg src={DiaryBack} alt="#" />
          Diary
        </DiaryTop>
      </DiarySendBack>
      <div>
        <DiaryTitle>
          <DiaryImg src={BreakfastImg} alt="#" />
          Breakfast
        </DiaryTitle>
        <DiaryBox>
          <DiaryText>Carbonohidrates:0</DiaryText>
          <DiaryText>Protein:0</DiaryText>
          <DiaryText>Fat:0</DiaryText>
        </DiaryBox>
        <RecordContainer>
          <div>
            <div>
              <NumberWindow>
                1 <ButtonPlus src={ButtonSvg} alt="#" />
                <DearyButton>Record your meal</DearyButton>
              </NumberWindow>
              <NumberWindow>2</NumberWindow>
              <NumberWindow>3</NumberWindow>
              <NumberWindow>4</NumberWindow>
            </div>
          </div>
        </RecordContainer>
      </div>
      <div>
        <DiaryTitle>
          <DiaryImg src={LunchImg} alt="#" />
          Lunch
        </DiaryTitle>
        <DiaryBox>
          <DiaryText>Carbonohidrates:0</DiaryText>
          <DiaryText>Protein:0</DiaryText>
          <DiaryText>Fat:0</DiaryText>
        </DiaryBox>
        <RecordContainer>
          <div>
            <NumberWindow>
              1<DearyButton>+ Record your meal</DearyButton>
            </NumberWindow>
            <NumberWindow>2</NumberWindow>
            <NumberWindow>3</NumberWindow>
            <NumberWindow>4</NumberWindow>
          </div>
        </RecordContainer>
      </div>
      <div>
        <DiaryTitle>
          <DiaryImg src={DinnerImg} alt="#" />
          Dinner
        </DiaryTitle>
        <DiaryBox>
          <DiaryText>Carbonohidrates:0</DiaryText>
          <DiaryText>Protein:0</DiaryText>
          <DiaryText>Fat:0</DiaryText>
        </DiaryBox>
        <RecordContainer>
          <div>
            <div>
              <NumberWindow>
                1 <ButtonPlus src={ButtonSvg} alt="#" />
                <DearyButton>Record your meal</DearyButton>
              </NumberWindow>
              <NumberWindow>2</NumberWindow>
              <NumberWindow>3</NumberWindow>
              <NumberWindow>4</NumberWindow>
            </div>
          </div>
        </RecordContainer>
      </div>
      <div>
        <DiaryTitle>
          <DiaryImg src={SnackImg} alt="#" />
          Snack
        </DiaryTitle>
        <DiaryBox>
          <DiaryText>Carbonohidrates:0</DiaryText>
          <DiaryText>Protein:0</DiaryText>
          <DiaryText>Fat:0</DiaryText>
        </DiaryBox>
        <RecordContainer>
          <div>
            <div>
              <NumberWindow>
                1 <ButtonPlus src={ButtonSvg} alt="#" />
                <DearyButton>Record your meal</DearyButton>
              </NumberWindow>
              <NumberWindow>2</NumberWindow>
              <NumberWindow>3</NumberWindow>
              <NumberWindow>4</NumberWindow>
            </div>
          </div>
        </RecordContainer>
      </div>
    </DiaryContainer>
  );
};

export default DiaryPage;
// Viacheslav, [24.12.2023 23:27]
// Email: denny@discardmail.com

// Viacheslav, [24.12.2023 23:27]
// Password: 123456
