import ButtonSignIn from "../../components/WelcomePage/Button/buttonSignIn";
import ButtonSignUp from "../../components/WelcomePage/Button/buttonSignUp";
import MainPhotoWelcomePage from "../../components/WelcomePage/MainPhoto/mainPhoto";
import ServicesBenefits from "../../components/WelcomePage/ServicesBenefits/servicesBenefits";
import WelcomePageTitle from "../../components/WelcomePage/Title/WelcomePageTitle";
import {
  WelcomePageContainer,
  ButtonContainer,
} from './welcomePage.styled';

const WelcomePage = () => {
  console.log('WelcomePage is rendering');
  return (
    <WelcomePageContainer>
      <MainPhotoWelcomePage />
      <div>
        <WelcomePageTitle />
      </div>
      <ButtonContainer>
        <ButtonSignIn />
        <ButtonSignUp />
      </ButtonContainer>
    
        <ServicesBenefits />
     
    </WelcomePageContainer>
  );
};

export default WelcomePage;
