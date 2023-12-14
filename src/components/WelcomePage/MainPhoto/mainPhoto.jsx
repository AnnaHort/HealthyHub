import mainPhoto from "../../../img/welcomePage/Welcomepagemobile.png"
import styled from "styled-components";

const Image = styled.img`
  @media (min-width: 768px) {
    width: 380px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1024px) {
    width: 592px;
  }
`;
const MainPhotoWelcomePage = () => {
    return (
      <div>
        <Image src={mainPhoto} alt="sport" width="300" />
      </div>
    );
}

export default MainPhotoWelcomePage;