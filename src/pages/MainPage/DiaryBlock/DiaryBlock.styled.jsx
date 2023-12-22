import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const DiaryBlockContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 232px;
  margin-top: 12px;
  padding: 16px 12px;
  border-radius: 12px;
  background: var(--color-primary-black-2);
  overflow-y: auto;
`;

export const DiaryBlockTitle = styled.h1`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`;

export const SeeMoreButton = styled(NavLink)``;
