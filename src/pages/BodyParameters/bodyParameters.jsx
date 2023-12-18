import { FormBodyParameters } from '../../components/BodyParameters/BodyForm/bodyParametersForm';
import PhotoBodyParameters from "../../components/BodyParameters/photoBodyParameters";
import TitleBodyParameters from "../../components/BodyParameters/title/title";
import {
  BodyContainer,
  FlexBodyContainer,
  WrappBodyContainer,
} from './bodyParameters.styled';

const BodyParameters = () => {
    return (
      <BodyContainer>
        <FlexBodyContainer>
          <PhotoBodyParameters />
          <WrappBodyContainer>
            <TitleBodyParameters />
            <FormBodyParameters />
          </WrappBodyContainer>
        </FlexBodyContainer>
      </BodyContainer>
    );
};

export default BodyParameters;
