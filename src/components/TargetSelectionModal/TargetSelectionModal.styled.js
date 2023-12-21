import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px 10px 40px 10px;
  background-color: var(--color-primary-black);

  @media (min-width: 834px) {
    flex-shrink: 0;
    padding: 20px 32px 40px 24px;
    border-radius: 12px;
    background: var(--Color-Primary-Black-2, #0f0f0f);
    box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Title = styled.h3`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  padding-bottom: 16px;
  margin: 0;

  @media (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
    margin: 0 auto;
  }

  @media (min-width: 1440px) {
    margin: 0;
  }
`;

export const Description = styled.p`
  color: var(--color-primary-grey);
  padding-bottom: 24px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  width: 284px;

  @media (min-width: 834px) {
    flex-direction: row;
  }

  @media (min-width: 1440px) {
    text-align: start;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;

  @media (min-width: 834px) {
    width: 166px;
  }

  @media (min-width: 1440px) {
    display: flex;
    align-items: flex-start;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 36px;
  margin-bottom: 26px;

  @media (min-width: 834px) {
    width: 380px;
    justify-content: center;
  }

  @media (min-width: 1440px) {
    display: flex;
    width: 192px;
    flex-direction: column;
  }
`;

// export const RadioItem = styled.li`
//   display: flex;
//   gap: 20px;

//   @media (min-width: 834px) {
//     gap: 0px;
//   }

//   @media (min-width: 1440px) {
//     gap: 20px;
//   }
// `;

export const CustomRadio = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  opacity: 0;
`;

// export const Label = styled.label`
//   color: var(--color-primary-white);
//   font-family: Poppins;
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 20px;

//   position: relative;
//   padding-left: 32px;
//   cursor: pointer;
//   line-height: 1.43;

//   &::before {
//     content: '';
//     display: inline-block;
//     position: absolute;
//     top: 50%;
//     transform: translate(-50%, -50%);
//     left: 0;
//     width: 40px;
//     height: 40px;
//     border: 1px solid #b6b6b6;
//     background: transparent;
//     border-radius: 12px;
//   }
//   &::after {
//     content: '';
//     position: absolute;
//     top: 50%;
//     left: 0;
//     transform: translate(-50%, -50%);
//     width: 40px;
//     height: 40px;
//     background: transparent;
//     border: 1px solid #b6c3ff;
//     border-radius: 12px;
//     opacity: 0;
//     transition: 0.2s ease-in;
//   }

//   input[type='radio']:checked + &::after {
//     opacity: 1;
//   }

//   input[type='radio'] + &::before {
//     content: '';
//     display: inline-block;
//     position: absolute;
//     top: 50%;
//     left: 0;
//     transform: translate(-50%, -50%);
//     width: 40px;
//     height: 40px;
//   }

//   input[type='radio']:checked + & {
//     color: #b6c3ff; /* Change this to your desired text color */
//   }
// `;

export const RadioItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (min-width: 834px) {
    gap: 10px;
  }

  @media (min-width: 1440px) {
    gap: 10px;
  }
`;

export const Label = styled.label`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  display: flex;
  gap: 32px; //відстань між svg і текстом

  position: relative;
  cursor: pointer;

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 0;
    width: 40px;
    height: 40px;
    border: 1px solid #b6b6b6;
    background: transparent;
    border-radius: 12px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    background: transparent;
    border: 1px solid #b6c3ff;
    border-radius: 12px;
    opacity: 0;
    transition: 0.2s ease-in;
  }

  @media (min-width: 834px) {
    &::after {
      left: 10px;
    }
  }

  @media (min-width: 1440px) {
    &::after {
      left: 10px;
    }
  }

  input[type='radio']:checked + &::after {
    opacity: 1;
  }

  input[type='radio'] + &::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
  }

  @media (min-width: 834px) {
    input[type='radio'] + &::before {
      left: 10px; //***
    }
  }

  @media (min-width: 1440px) {
    input[type='radio'] + &::before {
      left: 10px;
    }
  }

  input[type='radio']:checked + & {
    color: #b6c3ff; /* Change this to your desired text color */
  }

  img {
    width: 20px; /* Set the width of your SVG */
    height: 20px; /* Set the height of your SVG */
  }
`;

export const BtnConfirm = styled.button`
  width: 300px;
  height: 36px;
  color: var(--color-primary-black-2);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  border-radius: 12px;
  background: var(--color-primary-green-lite);
  display: flex;
  padding: 8px 10px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: none;
  margin-bottom: 20px;

  @media (min-width: 834px) {
    width: 166px;
    margin-bottom: 0px;
  }

  @media (min-width: 1440px) {
  }
`;

export const BtnBack = styled.button`
  width: 300px;
  margin: 0;
  color: var(--color-primary-grey);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  display: block;

  @media (min-width: 834px) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 16px;
  height: 16px;

  &:hover,
  &:focus {
  }
`;

export const CloseButton = styled.button`
  display: none;
  padding: 0;
  width: 16px;
  height: 16px;
  margin-right: 8px;

  @media (min-width: 834px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const StyledIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: var(--color-primary-grey);
`;
