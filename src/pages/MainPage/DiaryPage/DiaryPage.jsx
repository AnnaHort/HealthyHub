import  DiaryMealList from '../../../components/DiaryMeal/DiaryMealList';
import { DiaryContainer } from './DiaryPage.styled';
const DiaryPage = () => {
  return (
    <>
      <DiaryContainer>
        <DiaryMealList />
      </DiaryContainer>
    </>
  );
};

export default DiaryPage;
