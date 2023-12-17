import { FormBodyParameters } from '../../components/BodyParameters/BodyForm/bodyParametersForm';
import PhotoBodyParameters from "../../components/BodyParameters/photoBodyParameters";
import TitleBodyParameters from "../../components/BodyParameters/title/title";
import { BodyContainer, FlexBodyContainer } from './bodyParameters.styled';

const BodyParameters = () => {
    return (
      <BodyContainer>
        <FlexBodyContainer>
          <PhotoBodyParameters />
          <TitleBodyParameters />
          <FormBodyParameters/>
        </FlexBodyContainer>
      </BodyContainer>
    );
};

export default BodyParameters;
