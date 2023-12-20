import {
  IconButton,
  // ImgArrowDown,
  ImgContainer,
  StyledIcon,
  Text,
  UserInfoContainer,
} from './UserInfoNav.styled';

const UserInfoNav = () => {
  return (
    <UserInfoContainer>
      <Text>Konstantin</Text>
      <ImgContainer>
        {/* <img src="/src/components/UserInfoNav/Avatar.svg" alt="Avatar" /> */}
        <img src="../../components/UserInfoNav/Avatar.svg" alt="Avatar" />
      </ImgContainer>

      <IconButton>
        {/* <ImgArrowDown
          src="/src/components/ControlPanelGoals/Img/arrow-down-min.svg"
          alt="Arrow bown"
        /> */}
        <StyledIcon>
          <use href="/src/Sprites/icons/symbol-defs.svg#icon-arrow-down"></use>
        </StyledIcon>
      </IconButton>
    </UserInfoContainer>
  );
};

export default UserInfoNav;
