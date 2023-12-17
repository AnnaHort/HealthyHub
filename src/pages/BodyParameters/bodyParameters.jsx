import FormBodyParameters from "../../components/BodyParameters/BodyForm/bodyParametersForm";
import PhotoBodyParameters from "../../components/BodyParameters/photoBodyParameters";
import TitleBodyParameters from "../../components/BodyParameters/title/title";

const BodyParameters = () => {
    return (
        <div>
            <PhotoBodyParameters/>
            <TitleBodyParameters />
            <FormBodyParameters/>
        </div>
    )
};

export default BodyParameters;
