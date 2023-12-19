import { useState } from 'react';

import Logo from '../Logo/Logo';
import ControlPanelGoals from '../ControlPanelGoals/ControlPanelGoals';
import ControlPanelWeight from '../ControlPanelWeight/ControlPanelWeight';
import UserInfoNav from '../UserInfoNav/UserInfoNav';
import {
  Container,
  ControlPanelContainer,
  IconButton,
  LogoContainer,
  ModalContainer,
  StyledIcon,
  UserInfoContainer,
} from './HeaderAuthorizedUser.styled';
import GoalAndWeighModal from '../GoalAndWeighModal/GoalAndWeighModal';

const HeaderAuthorizedUser = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleIconButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseButtonClick = () => {
    setModalOpen(false);
  };

  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>

      <IconButton onClick={handleIconButtonClick}>
        <StyledIcon isModalOpen={isModalOpen}>
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

      {isModalOpen && (
        <ModalContainer isModalOpen={isModalOpen}>
          <GoalAndWeighModal onCloseButtonClick={handleCloseButtonClick} />
        </ModalContainer>
      )}
    </Container>
  );
};

export default HeaderAuthorizedUser;
