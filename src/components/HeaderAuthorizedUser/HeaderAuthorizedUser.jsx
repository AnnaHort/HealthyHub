import { useState } from 'react';

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
import LogoAuthorizedUser from '../LogoAuthorizedUser/LogoAuthorizedUser';
import { ReactComponent as IconMenu } from '../../img/Header/icon-menu.svg';

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
        <LogoAuthorizedUser />
      </LogoContainer>

      <IconButton onClick={handleIconButtonClick}>
        <StyledIcon>
          <IconMenu style={{ stroke: isModalOpen ? '#E3FFA8' : '#B6B6B6' }} />
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
