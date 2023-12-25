import ListRecommendedFoodPage from './ListRecommendedFoodPage/listRecommendedFoodPage';
import { ReactComponent as Images } from '../../img/RecommendedFoodPage/ImgRecomendedFood.svg';
import styled from 'styled-components';


const RecommendedFoodContainer = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    gap: 44px;
    flex-direction: row;
  }
`;

const TitleRecommendedFood = styled.h2`
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  color: var(--color-primary-white);
  margin: 16px 0;

  @media (min-width: 834px) {
    margin: 24px 0 20px 0;
  }
`;

const ImgContainer = styled.div`
  width: 300px;
  height: 312px;
  margin-bottom: 24px;

  @media (min-width: 834px) {
    width: 380px;
    height: 396px;
    margin: 0 auto;
    margin-bottom: 24px;
  }

  @media (min-width: 1440px) {
    width: 536px;
    height: 560px;
    margin: 0;
    margin-left: auto;
  }
`;
const RecommendedFoodPage = () => {
  return (
    <div>
      <TitleRecommendedFood>Recommented food</TitleRecommendedFood>
      <RecommendedFoodContainer>
        <ImgContainer>
          <Images />
        </ImgContainer>

        <ListRecommendedFoodPage />
      </RecommendedFoodContainer>
    </div>
  );
};

export default RecommendedFoodPage;
