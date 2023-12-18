import {
  Container,
  Description,
  IconButton,
  Img,
  ImgArrowDown,
  ImgArrowRight,
  ImgBox,
  SelectPanel,
  Title,
} from './ControlPanelGoals.styled';

const ControlPanelGoals = () => {
  return (
    <Container>
      <ImgBox>
        <Img
          src="/src/components/ControlPanelGoals/Img/LoseFatImageMen-min.svg"
          alt="Arrow right"
        />
      </ImgBox>
      <SelectPanel>
        <Title>Goal</Title>
        <Description>
          Lose fat
          <IconButton>
            <ImgArrowDown
              src="/src/components/ControlPanelGoals/Img/arrow-down-min.svg"
              alt="Arrow bown"
            />
            <ImgArrowRight
              src="/src/components/ControlPanelGoals/Img/arrow-right-min.svg"
              alt="Arrow right"
            />
          </IconButton>
        </Description>
      </SelectPanel>
    </Container>
  );
};

export default ControlPanelGoals;
