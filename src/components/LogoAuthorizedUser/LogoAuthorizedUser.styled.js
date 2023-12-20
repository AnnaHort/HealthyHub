import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LogoStyled = styled(NavLink)`
  color: var(--color-primary-grey);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.38;

  @media (min-width: 834px) {
    font-size: 22px;
    line-height: 1.46%;
  }
`;
