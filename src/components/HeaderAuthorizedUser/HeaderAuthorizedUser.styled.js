import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 60px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 10px 0 10px;

  @media (min-width: 834px) {
    height: 100px;
    padding: 0 27px 0 27px;
  }

  @media (min-width: 1440px) {
    padding: 0 36px 0 34px;
    max-width: 1440px;
  }
`;

export const UserInfoContainer = styled.div`
  margin-left: auto;
  @media (min-width: 834px) {
    margin-left: 73px;
  }

  @media (min-width: 1280px) {
    margin-left: 124px;
  }
`;

export const LogoContainer = styled.div``;

export const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin-left: 8px;
  display: flex;

  @media (min-width: 834px) {
    display: flex;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-left: 8px;
  }
`;

export const ControlPanelContainer = styled.div`
  display: none;

  @media (min-width: 834px) {
    display: flex;
    gap: 40px;
    margin-left: auto;
  }

  @media (min-width: 1280px) {
    gap: 80px;
  }
`;

export const StyledIcon = styled.svg`
  width: 16px;
  height: 16px;
  @media (min-width: 834px) {
    display: none;
  }
`;

export const ModalContainer = styled.div`
  position: absolute;
  z-index: 1;
  padding-top: 250px;
`;
