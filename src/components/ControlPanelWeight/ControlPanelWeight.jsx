import {
  Container,
  Description,
  IconButton,
  Img,
  ImgBox,
  SelectPanel,
  StyledIcon,
  Title,
} from './ControlPanelWeight.styled';

const ControlPanelWeight = () => {
  return (
    <Container>
      <ImgBox>
        {/* <Img src="/src/Emoji/WaightImage.svg" alt="Waiting image" /> */}
        <Img src="../../Emoji/WaightImage.svg" alt="Waiting image" />
      </ImgBox>
      <SelectPanel>
        <Title>Weight</Title>
        <Description>
          48 <span>kg</span>
          <IconButton>
            {/* <img
              src="/src/components/ControlPanelWeight/img/edit-2-min.svg"
              alt="Edit"
            /> */}

            <StyledIcon>
              <use href="/src/Sprites/icons/symbol-defs.svg#icon-edit-2"></use>
            </StyledIcon>
          </IconButton>
        </Description>
      </SelectPanel>
    </Container>
  );
};

export default ControlPanelWeight;
