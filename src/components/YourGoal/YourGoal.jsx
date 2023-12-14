import { useDispatch } from 'react-redux';

import { makeTrueState, makeFalseState } from '../../redux/testSlice';

import {
  BtnBack,
  BtnNext,
  Container,
  CustomRadio,
  Description,
  Form,
  Img,
  Label,
  List,
  RadioItem,
  Title,
} from './YourGoal.styled';

export const YourGoal = () => {
  const dispatch = useDispatch();

  const handleMakeTrue = () => {
    dispatch(makeTrueState());
  };

  const handleMakeFalse = () => {
    dispatch(makeFalseState());
  };
  return (
    <Container>
      <Img
        alt="Goal Image"
        src="/src/components/YourGoal/img/Illustration Goals-min.svg"
      />
      <Form>
        <Title>Your goal</Title>
        <Description>
          Choose a goal so that we can help you effectively
        </Description>
        <List>
          <RadioItem>
            <CustomRadio
              type="radio"
              id="loseFat"
              name="goal"
              value="Lose Fat"
              onChange={handleMakeTrue}
            />
            <Label htmlFor="loseFat">Lose Fat</Label>
          </RadioItem>
          <RadioItem>
            <CustomRadio
              type="radio"
              id="maintain"
              name="goal"
              value="Maintain"
              onChange={handleMakeFalse}
            />
            <Label htmlFor="maintain">Maintain</Label>
          </RadioItem>
          <RadioItem>
            <CustomRadio
              type="radio"
              id="gainMuscle"
              name="goal"
              value="Gain Muscle"
              onChange={handleMakeFalse}
            />
            <Label htmlFor="gainMuscle">Gain Muscle</Label>
          </RadioItem>
        </List>

        <BtnNext type="submit">Next</BtnNext>
        <BtnBack type="button">Back</BtnBack>
      </Form>
    </Container>
  );
};
