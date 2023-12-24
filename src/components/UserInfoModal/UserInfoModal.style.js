import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 158px;
  padding: 12px 12px 24px 24px;
  border-radius: 12px;
  background: var(--Color-Primary-Black-2, #0f0f0f);
  box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
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
