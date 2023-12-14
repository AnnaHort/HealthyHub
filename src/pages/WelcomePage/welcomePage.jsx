import ButtonSignIn from '../../components/WelcomePage/Button/buttonSignIn';
import ButtonSignUp from '../../../components/WelcomePage/Button/buttonSignUp';
import ServicesBenefits from '../../../components/WelcomePage/ServicesBenefits/servicesBenefits';
import MainPhotoWelcomePage from '../../../components/WelcomePage/MainPhoto/mainPhoto';

const WelcomePage = () => {
  return (
    <div>
      <MainPhotoWelcomePage/>
      <div>
        <h1>Set goals and achieve them</h1>
        <h2>The service will help you set goals and follow them.</h2>
      </div>
      <div>
        <ButtonSignUp/>
        <ButtonSignIn/>
      </div>

      <ServicesBenefits/>
    </div>
  );
};

export default WelcomePage;
