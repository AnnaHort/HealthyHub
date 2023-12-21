import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 12px;
`;

export const ImgBox = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: 1px solid #5f5e5c;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h3`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  margin-bottom: 2px;
`;

export const SelectPanel = styled.div`
  padding-top: 3px;
  padding-bottom: 3px;
`;

export const Description = styled.p`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  display: flex;
  align-items: center;
`;

export const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 7px;
  border: none;
  background: none;
`;

export const StyledArrowDown = styled.svg`
  display: none;
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-green-lite);
  @media (min-width: 834px) {
    display: block;
  }
`;

export const StyledArrowRight = styled.svg`
  display: block;
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-green-lite);
  @media (min-width: 834px) {
    display: none;
  }
`;

export const ModalContainer = styled.div`
  position: absolute;
  z-index: 1;
  padding-top: 74px; //реголює висоту модалки
`;
