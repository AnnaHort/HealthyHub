import mainPhoto from '/src/img/welcomePage/symbol-defs.svg';
import styled from "styled-components";

const SvgContainer = styled.svg`
  @media (min-width: 768px) {
    width: 380px;
    height: 376px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1024px) {
    width: 590px;
    height: 588px;
  }
`;
const MainPhotoWelcomePage = () => {
    return (
      <div>
        <SvgContainer width="300" height="296">
          <use
            xlinkHref={`${mainPhoto}#icon-sport`}
            width="100%"
            height="100%"
          ></use>
        </SvgContainer>
      </div>
    );
}

export default MainPhotoWelcomePage;