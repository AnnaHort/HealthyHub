import {
  IconButton,
  ImgArrowDown,
  ImgContainer,
  Text,
  UserInfoContainer,
} from './UserInfoNav.styled';

const UserInfoNav = () => {
  return (
    <UserInfoContainer>
      <Text>Konstantin</Text>
      <ImgContainer>
        <img src="/src/components/UserInfoNav/Avatar.svg" alt="Avatar" />
      </ImgContainer>

      <IconButton>
        <ImgArrowDown
          src="/src/components/ControlPanelGoals/Img/arrow-down-min.svg"
          alt="Arrow bown"
        />
      </IconButton>
    </UserInfoContainer>
  );
};

export default UserInfoNav;
