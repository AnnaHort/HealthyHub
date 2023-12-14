import { BenefitsList } from './serviseBenefits.styled';
const ServicesBenefits = () => {
   console.log('ButtonSignUp is rendering');
   return (
     <div>
       <ul>
         <BenefitsList>Set goals</BenefitsList>
         <BenefitsList>Watch your calories</BenefitsList>
         <BenefitsList>Keep track of your water intake</BenefitsList>
         <BenefitsList>Control your weight</BenefitsList>
       </ul>
     </div>
   );
}

export default ServicesBenefits;