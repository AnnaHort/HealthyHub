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
  Div,
  StyledIcon,
} from './TargetSelectionModal.styled';
import { ReactComponent as CloseCircle } from '../../img/Header/close-circle.svg';
import LooseFatMen from '../../Emoji/LoseFatMen.svg';
import MaintakeGirl from '../../Emoji/MaintakeGirl.svg';
import GainMuscle from '../../Emoji/GainMuscle.svg';

export const TargetSelectionModal = ({ onCloseButtonClick }) => {
  return (
    <Container>
      <Div>
        <Title>Target selection</Title>
        <CloseButton onClick={onCloseButtonClick}>
          <StyledIcon>
            <CloseCircle />
          </StyledIcon>
        </CloseButton>
      </Div>

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
              <img src={LooseFatMen} alt="LooseFatMen" />
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
              <img src={MaintakeGirl} alt="MaintakeGirl" />
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
              <img src={GainMuscle} alt="GainMuscle" />
              Gain Muscle
            </Label>
          </RadioItem>
        </List>
      </Form>
      <BtnConfirm>Submit</BtnConfirm>
      <BtnBack onClick={onCloseButtonClick}>Back</BtnBack>
    </Container>
  );
};
