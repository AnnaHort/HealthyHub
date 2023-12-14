import ButtonSignIn from "../../components/WelcomePage/Button/buttonSignIn";
import ButtonSignUp from "../../components/WelcomePage/Button/buttonSignUp";
import MainPhotoWelcomePage from "../../components/WelcomePage/MainPhoto/mainPhoto";
import ServicesBenefits from "../../components/WelcomePage/ServicesBenefits/servicesBenefits";
import WelcomePageTitle from "../../components/WelcomePage/Title/WelcomePageTitle";
import {
  WelcomePageContainer,
  FlexContainer,
  ButtonContainer,
  TitleContainer,
} from './welcomePage.styled';

const WelcomePage = () => {
  console.log('WelcomePage is rendering');
  return (
    <WelcomePageContainer>
      <MainPhotoWelcomePage />
      <FlexContainer>
        <TitleContainer>
          <WelcomePageTitle />
        </TitleContainer>
        <ButtonContainer>
          <ButtonSignIn />
          <ButtonSignUp />
        </ButtonContainer>

        <ServicesBenefits />
      </FlexContainer>
    </WelcomePageContainer>
  );
};

export default WelcomePage;
