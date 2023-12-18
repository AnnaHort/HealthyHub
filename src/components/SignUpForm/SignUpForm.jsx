import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { register } from '../../redux/auth/authOperations';
import SignUpRegister from './SignUpRegister';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [localData, setLocalData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState("");
  console.log(localData);
  console.log(error);

  const handleRegisterSubmit = async (values) => {
    try {
      console.log('Before dispatching register');
      const response = await dispatch(register(values));
      console.log('After dispatching register');
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

  return (
    <div>
      <SignUpRegister onSubmit={handleRegisterSubmit} />
      <ToastContainer />
    </div>
  );
};

export default SignUpForm;
