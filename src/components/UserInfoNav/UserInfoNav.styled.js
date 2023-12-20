import styled from 'styled-components';

export const UserInfoContainer = styled.div`
  width: 130px;
  height: 28px;
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  width: 78px;
  color: var(--color-primary-white);
  text-align: right;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  margin-right: 6px;
`;

export const ImgContainer = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 28px;
  background: lightgray 50%;
  margin-right: 4px;
`;

export const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  padding: 0;
`;

export const ImgArrowDown = styled.img`
  display: block;

  @media (min-width: 834px) {
    display: block;
  }
`;

export const StyledIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-green-lite);
`;

export const ModalContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  padding-top: 80px; //реголює висоту модалки
  padding-right: 27px;
  right: 0;

  @media (min-width: 1280px) {
    padding-right: 34px;
  }
`;
