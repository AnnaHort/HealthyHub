import {
  Container,
  Description,
  IconButton,
  Img,
  ImgBox,
  SelectPanel,
  Title,
} from './ControlPanelWeight.styled';

const ControlPanelWeight = () => {
  return (
    <Container>
      <ImgBox>
        <Img
          src="/src/components/ControlPanelWeight/img/waight-image-min.svg"
          alt="Waiting image"
        />
      </ImgBox>
      <SelectPanel>
        <Title>Weight</Title>
        <Description>
          48 <span>kg</span>
          <IconButton>
            <img
              src="/src/components/ControlPanelWeight/img/edit-2-min.svg"
              alt="Edit"
            />
          </IconButton>
        </Description>
      </SelectPanel>
    </Container>
  );
};

export default ControlPanelWeight;
