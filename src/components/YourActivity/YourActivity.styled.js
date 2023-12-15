import styled from 'styled-components';

export const YourActivityContainerStyled = styled.div`
  background-color: var(--color-primary-black);
  padding: 24px 10px;
`;

export const YourActivityImgStyled = styled.img`
  margin-bottom: 24px;
`;

export const YourActivityTitleStyled = styled.h2`
  color: var(--color-primary-white);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 16px;
`;

export const YourActivityText = styled.p`
  color: var(--color-primary-grey);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  margin-bottom: 24px;
`;

export const YourActivityList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;

export const YourActivityListEStyled = styled.li`
  gap: 8px;
  display: flex;
  align-items: center;
`;

export const InputContainerStyled = styled.div`
  position: relative;
  width: 12px;
  height: 12px;

  input[type='radio'] {
    display: none;
  }

  &::before {
    content: '';
    width: 12px;
    height: 12px;
    top: 0;
    left: 0;
    position: absolute;
    background: var(--color-primary-black-2);
    border-radius: 50%;
    border: 1px solid var(--color-primary-grey);
  }

  &::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    top: 3px;
    left: 3px;
    background: var(--color-primary-green-lite);
    border-radius: 50%;
    opacity: 1;
  }
`;


export const YourActivityLabelStyled = styled.label`
  color: var(--color-primary-white);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
`;

export const YourActivitySignUpBtnStyled = styled.button`
  color: var(--color-primary-black-2);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
  border-radius: 12px;
  background: var(--color-primary-green-lite);
  outline: none;
  border: none;
`;
