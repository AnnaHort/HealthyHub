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

  @media (min-width: 834px) {
    width: 834px;
    padding-left: 27px;
    padding-right: 27px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding-left: 34px;
    padding-right: 34px;
  }
`; 

export const ModalContainer = styled.div`
position: absolute;
  top: -10px;
  right: 0;
  width: 158px;

  padding: 12px 12px 24px 24px;
  border-radius: 12px;

  background: var(--Color-Primary-Black-2, #0f0f0f);
  box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);

  @media (min-width: 834px) {
    top: -20px;
  }



`;

export const ComponentBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
  padding: 0;

  @media (min-width: 834px) {
  }
`;