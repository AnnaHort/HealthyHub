import DiaryMealList from '../../../components/DiaryMeal/DiaryMealList';
import { NavLink } from 'react-router-dom';
import { DiaryContainer, DiaryTitle, DiaryHeader } from './DiaryPage.styled';
import { ReactComponent as ArrowBack } from '../../../img/DiaryPage/arrow-back.svg';


const DiaryPage = () => {
  return (
    <>
          <DiaryContainer>
              <DiaryHeader>
                  <NavLink to="/main">
          <ArrowBack/>
              </NavLink>
              <DiaryTitle>Diary</DiaryTitle>
              </DiaryHeader>
        <DiaryMealList />
      </DiaryContainer>
    </>
  );
};

export default DiaryPage;
