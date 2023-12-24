import { FormBodyParameters } from '../../components/BodyParameters/BodyForm/bodyParametersForm';
// import PhotoBodyParameters from "../../components/BodyParameters/photoBodyParameters";
import TitleBodyParameters from "../../components/BodyParameters/title/title";
import {
  BodyContainer,
  FlexBodyContainer,
  WrappBodyContainer,
  StyledBodyImg
} from './bodyParameters.styled';

const BodyParameters = ({ onNext, onBack, onSubmit }) => {
  return (
    <BodyContainer>
      <FlexBodyContainer>
        <StyledBodyImg viewBox="0 0 300 296" />
        <WrappBodyContainer>
          <TitleBodyParameters />
          <FormBodyParameters
            onBack={onBack}
            onNext={onNext}
            onSubmit={onSubmit}
          />
        </WrappBodyContainer>
      </FlexBodyContainer>
    </BodyContainer>
  );
};

export default BodyParameters;
