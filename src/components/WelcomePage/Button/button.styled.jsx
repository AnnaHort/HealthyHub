import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const BSignIn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 142px;
  height: 36px;
  border-radius: 12px;
  border: none;
  background-color: var(--color-primary-green-lite);

  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--color-primary-black-2);

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 212px;
  }
  @media (min-width: 1024px) and (max-width: 1279px) {
  }
  @media (min-width: 1280px) {
    width: 212px;
  }
`;

export const BSignOut = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 142px;
  height: 36px;
  border-radius: 12px;
  border: none;
  background-color: inherit;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: var(--color-primary-white);

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 212px;
  }
  @media (min-width: 1024px) and (max-width: 1279px) {
    max-width: 212px;
  }

  @media (min-width: 1280px) {
    width: 212px;
  }
`;