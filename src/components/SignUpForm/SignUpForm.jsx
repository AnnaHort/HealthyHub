import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { register } from '../../redux/auth/authOperations';
import SignUpRegister from './SignUpRegister';
import { YourGoal } from '../YourGoal/YourGoal';
import SelectGender from '../SelectGender/SelectGender';

import YourActivity from '../YourActivity/YourActivity';
import BodyParameters from '../BodyParameters/bodyParameters';

const SignUpForm = () => {
  const dispatch = useDispatch();

  const [currentStep, setCurrentStep] = useState(1);
  const [, setLocalData] = useState({
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
        setLocalData(values);
      }
    } catch (err) {
      console.error('Registration Error:', err.message);
      if (err?.response?.status === 500) {
        toast.error('Invalid Email');
      } else {
        toast.error('Registration failed. Please try again later.');
      }
      setError(err);
    }
  };

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
        <SignUpRegister onSubmit={handleRegisterSubmit} onNext={handleNext} />
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
          onSubmit={SelectData}
        />
      )}
      <ToastContainer />
    </div>
  );
};

export default SignUpForm;
