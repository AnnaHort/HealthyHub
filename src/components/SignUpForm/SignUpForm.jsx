import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { register } from '../../redux/auth/authOperations';
import SignUpRegister from './SignUpRegister';
import { YourGoal } from '../YourGoal/YourGoal';
import SelectGender from '../SelectGender/SelectGender';
import BodyParameters from '../../pages/BodyParameters/bodyParameters';
import YourActivity from '../YourActivity/YourActivity';

const SignUpForm = () => {
  const dispatch = useDispatch();

  const [currentStep, setCurrentStep] = useState(1);
  const [, setPersonalData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [, setError] = useState('');
  const [dataGoal, setDataGoal] = useState('');
  const [dataAgeGender, setDataAgeGender] = useState({
    age: '',
    gender: '',
  });
  const [dataBodyParams, setDataBodyParams] = useState({
    height: '',
    weight: '',
  });
  const [dataActivity, setDataActivity] = useState('');
  //const [canProceed, setCanProceed] = useState(false); // Доданий новий стан

  console.log(dataGoal, 'local state dataGoal');
  console.log(dataAgeGender, 'local state dataAgeGender');
  console.log(dataBodyParams, 'local state dataBodyParams');
  console.log(dataActivity, 'local state dataActivity');

  const handleRegisterSubmit = async (values) => {
    try {
      const response = await dispatch(register(values));
      console.log('Response from Redux:', response);

      if (response.type === 'auth/register/fulfilled') {
        toast.success('Successful registration');
      }

      if (response.type === 'auth/register/rejected') {
        if (response.payload === 'Request failed with status code 500') {
          setError('Invalid Email');
          toast.error('Invalid Email');
        } else {
          setError(
            response.payload || 'Registration failed. Please try again later.'
          );
          toast.error('Registration failed. Please try again later.');
        }
      }
    } catch (err) {
      console.error('Registration Error:', err.message);
    }
  };



  // const handleRegisterNext = () => {
  //   if (canProceed === true) {
  //     setCanProceed(true);
  //     setCurrentStep(currentStep + 1);
  //   }
  // };

  const SelectData = (data) => {
    setDataGoal(data);
    setDataAgeGender(data);
    setDataBodyParams(data);
    setDataActivity(data);
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div>
      {currentStep === 1 && (
        <SignUpRegister onSubmit={SelectData} onNext={handleNext} />
      )}
      {currentStep === 2 && (
        <YourGoal
          onNext={handleNext}
          onBack={handlePrev}
          onSubmit={SelectData}
        />
      )}
      {currentStep === 3 && (
        <SelectGender
          onNext={handleNext}
          onBack={handlePrev}
          onSubmit={SelectData}
        />
      )}
      {currentStep === 4 && (
        <BodyParameters
          onNext={handleNext}
          onBack={handlePrev}
          onSubmit={SelectData}
        />
      )}
      {currentStep === 5 && (
        <YourActivity
          onNext={handleNext}
          onBack={handlePrev}
          onSubmit={handleRegisterSubmit}
        />
      )}
      <ToastContainer />
    </div>
  );
};

export default SignUpForm;
