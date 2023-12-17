import { BSignOut } from './button.styled';

const ButtonSignUp = () => {
  console.log('ButtonSignUp is rendering');
  return (
    <>
      <BSignOut to="/signup"> Sing Up</BSignOut>
    </>
  );
};

export default ButtonSignUp;
