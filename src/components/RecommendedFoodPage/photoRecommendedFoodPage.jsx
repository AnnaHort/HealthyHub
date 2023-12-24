import RecommendedPhoto from '../../img/RecommendedFoodPage/symbol-defs.svg#icon-Ketogenic-diet';
import styled
    from 'styled-components';
const SvgRecommendedFood = styled.svg`
margin-bottom: 24px;
  @media (min-width: 834px) {
    width: 380px;
    height: 396px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1024px) {
    width: 590px;
    height: 588px;
  }

  @media (min-width: 1440px){
    margin-left: 150px;
  }
`;
const PhotoRecommendedFoodPage = () => {
    return (
      <div>
        <SvgRecommendedFood width="300" height="312">
          <use
            xlinkHref={`${RecommendedPhoto}#icon-Ketogenic-diet`}
            width="100%"
            height="100%"
          ></use>
        </SvgRecommendedFood>
      </div>
    );
}

export default PhotoRecommendedFoodPage;