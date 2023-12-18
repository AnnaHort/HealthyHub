import {
  Form,
  List,
  RadioItem,
  CustomRadio,
  Label,
  Container,
  Title,
  Description,
  BtnConfirm,
  BtnBack,
  CloseButton,
  Img,
  Div,
} from './TargetSelectionModal.styled';

export const TargetSelectionModal = () => {
  return (
    <Container>
      <Div>
        <CloseButton>
          <Img
            src="/src/components/TargetSelectionModal/img/close-circle-min.svg"
            f
            alt="CloseButton"
          />
        </CloseButton>
      </Div>

      <Title>Target selection</Title>
      <Description>
        The service will adjust your calorie intake to your goal
      </Description>
      <Form>
        <List>
          <RadioItem>
            <CustomRadio
              type="radio"
              id="loseFat"
              name="goal"
              value="Lose Fat"
            />
            <Label htmlFor="loseFat">
              <img
                src="/src/components/TargetSelectionModal/img/LoseFatImageMen-min.svg"
                alt="Lose Fat"
              />
              Lose Fat
            </Label>
          </RadioItem>

          <RadioItem>
            <CustomRadio
              type="radio"
              id="maintain"
              name="goal"
              value="Maintain"
            />
            <Label htmlFor="maintain">
              <img
                src="/src/components/TargetSelectionModal/img/LoseFatImageMen-min.svg"
                alt="Lose Fat"
              />
              Maintain
            </Label>
          </RadioItem>

          <RadioItem>
            <CustomRadio
              type="radio"
              id="gainMuscle"
              name="goal"
              value="Gain Muscle"
            />
            <Label htmlFor="gainMuscle">
              <img
                src="/src/components/TargetSelectionModal/img/LoseFatImageMen-min.svg"
                alt="Lose Fat"
              />
              Gain Muscle
            </Label>
          </RadioItem>
        </List>
      </Form>
      <BtnConfirm>Submit</BtnConfirm>
      <BtnBack>Back</BtnBack>
    </Container>
  );
};
