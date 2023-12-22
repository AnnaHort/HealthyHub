import { FormBodyParameters } from '../../components/BodyParameters/BodyForm/bodyParametersForm';
import PhotoBodyParameters from "../../components/BodyParameters/photoBodyParameters";
import TitleBodyParameters from "../../components/BodyParameters/title/title";
import {
  BodyContainer,
  FlexBodyContainer,
  WrappBodyContainer,
} from './bodyParameters.styled';

const BodyParameters = ({ onNext, onBack, onSubmit }) => {
  return (
    <BodyContainer>
      <FlexBodyContainer>
        <PhotoBodyParameters />
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
