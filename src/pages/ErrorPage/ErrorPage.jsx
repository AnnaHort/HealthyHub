import { useDispatch } from 'react-redux';
import { Button, Container, Title } from './ErrorPage.styled';
import { makeFalseState, makeTrueState } from '../../redux/testSlice';

const ErrorPage = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Title>404</Title>
      <Button onClick={() => dispatch(makeTrueState())}>TrueState</Button>
      <Button onClick={() => dispatch(makeFalseState())}>FalseState</Button>
    </Container>
  );
};

export default ErrorPage;
