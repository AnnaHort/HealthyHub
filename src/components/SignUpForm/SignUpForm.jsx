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
  const [personalData, setPersonalData] = useState({
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

  const handleRegisterSubmit = async (data) => {
    try {
      const valuesToSend = {
        name: personalData.name,
        password: personalData.password,
        email: personalData.email,
        goal: dataGoal,
        gender: dataAgeGender.gender,
        age: dataAgeGender.age,
        height: dataBodyParams.height,
        weight: dataBodyParams.weight,
        userActivity: data.activity,
      };

      const response = await dispatch(register(valuesToSend));
      console.log('Response from Redux:', response);

      if (response.type === 'auth/register/fulfilled') {
        toast.success('Successful registration', { autoClose: 2000 });
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

  const SelectData = (data) => {
    setPersonalData((prevData) => ({
      ...prevData,
      name: data.name || prevData.name,
      email: data.email || prevData.email,
      password: data.password || prevData.password,
    }));

    setDataGoal(data.goal || dataGoal);

    setDataAgeGender((prevData) => ({
      ...prevData,
      age: data.age || prevData.age,
      gender: data.gender || prevData.gender,
    }));

    setDataBodyParams((prevData) => ({
      ...prevData,
      height: data.height || prevData.height,
      weight: data.weight || prevData.weight,
    }));
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
        <YourActivity onBack={handlePrev} onSubmit={handleRegisterSubmit} />
      )}
      <ToastContainer />
    </div>
  );
};

export default SignUpForm;
