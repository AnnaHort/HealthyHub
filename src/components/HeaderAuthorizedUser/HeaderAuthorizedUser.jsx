import Logo from '../Logo/Logo';
import ControlPanelGoals from '../ControlPanelGoals/ControlPanelGoals';
import ControlPanelWeight from '../ControlPanelWeight/ControlPanelWeight';
import UserInfoNav from '../UserInfoNav/UserInfoNav';
import {
  Container,
  ControlPanelContainer,
  IconButton,
  LogoContainer,
  StyledIcon,
  UserInfoContainer,
} from './HeaderAuthorizedUser.styled';

const HeaderAuthorizedUser = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>

      <IconButton>
        <StyledIcon>
          <use href="/src/Sprites/icons/symbol-defs.svg#icon-menu"></use>
        </StyledIcon>
      </IconButton>

      <ControlPanelContainer>
        <ControlPanelGoals />
        <ControlPanelWeight />
      </ControlPanelContainer>

      <UserInfoContainer>
        <UserInfoNav />
      </UserInfoContainer>
    </Container>
  );
};

export default HeaderAuthorizedUser;
