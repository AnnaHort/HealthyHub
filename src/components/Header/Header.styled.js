import styled from 'styled-components';

export const HeaderContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 19px 10px;
  align-items: center;

  width: 320px;
  margin: 0 auto;


 @media (min-width: 834px) {
  width: 834px;

  padding: 36px 27px;
 }


 @media (min-width: 1024px) {
  width: 1440px;

  padding: 34px 34px;
 }
`;

export const HeaderBg = styled.div`
  background-color: var(--color-primary-black-2);
`;