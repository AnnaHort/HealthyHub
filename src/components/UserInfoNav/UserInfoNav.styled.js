import styled from 'styled-components';

export const UserInfoContainer = styled.div`
  width: 130px;
  height: 28px;
  display: flex;
  align-items: center;
  gap: 6px;
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
`;

export const ImgContainer = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 28px;
  background: lightgray 50%;
`;

export const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
  border: none;
  background: none;
`;

export const ImgArrowDown = styled.img`
  display: block;

  @media (min-width: 834px) {
    display: block;
  }
`;
