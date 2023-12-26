import {
  BenegitsContainer, Benefits,
  BenefitsList,
} from './serviseBenefits.styled';
const ServicesBenefits = () => {
   return (
     <BenegitsContainer>
       <Benefits>
         <BenefitsList>Set goals</BenefitsList>
         <BenefitsList>Watch your calories</BenefitsList>
         <BenefitsList>Keep track of your water intake</BenefitsList>
         <BenefitsList>Control your weight</BenefitsList>
       </Benefits>
     </BenegitsContainer>
   );
}

export default ServicesBenefits;