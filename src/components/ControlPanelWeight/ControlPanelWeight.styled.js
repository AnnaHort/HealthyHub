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

export const Img = styled.img`
  width: 28px;
  height: 28px;
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

export const Span = styled.span`
  color: var(--color-primary-grey);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;

export const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  margin-left: 7px;
`;

export const StyledIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-green-lite);
`;

export const ModalContainer = styled.div`
  position: absolute;
  z-index: 1;
  padding-top: 74px; //реголює висоту модалки
  padding-right: 157px;
  right: 0;

  @media (min-width: 1280px) {
    padding-right: 258px;
  }
`;
