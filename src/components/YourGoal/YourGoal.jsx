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
  return (
    <Container>
      <Img
        alt="Goal Image"
        src="/src/components/YourGoal/img/IllustrationGoals-min.svg"
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
              id="maintain"
              name="goal"
              value="Maintain"
            />
            яя
            <Label for="maintain">Maintain</Label>
          </RadioItem>
          <RadioItem>
            <CustomRadio
              type="radio"
              id="gainMuscle"
              name="goal"
              value="Gain Muscle"
            />
            <Label for="gainMuscle">Gain Muscle</Label>
          </RadioItem>
          <RadioItem>
            <CustomRadio
              type="radio"
              id="loseFat"
              name="goal"
              value="Lose Fat"
            />
            <Label for="loseFat">Lose Fat</Label>
          </RadioItem>
        </List>
        <BtnNext>Next</BtnNext>

        <BtnBack type="button">Back</BtnBack>
      </Form>
    </Container>
  );
};
