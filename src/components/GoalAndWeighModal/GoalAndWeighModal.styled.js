import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;

  @media (min-width: 834px) {
  top: 100px;
  }
`;

export const ModalLayout = styled.div`
  position: relative;
  width: 320px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;
`;

export const Container = styled.div`
  width: 300px;
  height: 184px;
  padding: 16px 16px 24px 24px;
  border-radius: 12px;
  background: var(--color-primary-black-2);
  box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
  display: flex;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  width: 16px;
  height: 16px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 8px;
`;

export const Img = styled.img`
  width: 16px;
  height: 16px;

  &:hover,
  &:focus {
  }
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0px;

  @media (min-width: 834px) {
    display: none;
  }
`;

export const StyledIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-grey);
`;
