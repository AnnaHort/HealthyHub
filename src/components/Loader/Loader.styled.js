import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  transition: all 5s linear;

  background-color: rgba(5, 5, 5, 0.95);
  backdrop-filter: blur(6px);

  animation: ${fadeIn} 0.5s 2s ease-in-out forwards, ${fadeOut} 0.5s 2s ease-in-out forwards;
  `;