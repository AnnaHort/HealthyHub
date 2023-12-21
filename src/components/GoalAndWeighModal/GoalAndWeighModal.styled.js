import styled from 'styled-components';

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
  width: 16px;
  height: 16px;
  background: none;
  border: none;
  cursor: pointer;

  @media (min-width: 834px) {
    display: none;
  }
`;
