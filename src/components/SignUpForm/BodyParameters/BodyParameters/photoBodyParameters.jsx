import bodyParameters from '../../../../img/BodyParameters/symbol-defs.svg#icon-body-parameters';
import styled from 'styled-components';

const SvgContainer = styled.svg`
  @media (min-width: 834px) {
    width: 380px;
    height: 376px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1024px){
   margin-top: 90px;
  }

  @media (min-width: 1440px) {
    width: 590px;
    height: 588px;
  }
`;

const PhotoBodyParameters = () => {
    return (
      <div>
        <SvgContainer width="300" height="300">
          <use
            xlinkHref={`${bodyParameters}#icon-body-parameters`}
            width="100%"
            height="100%"
          ></use>
        </SvgContainer>
      </div>
    );
}

export default PhotoBodyParameters;