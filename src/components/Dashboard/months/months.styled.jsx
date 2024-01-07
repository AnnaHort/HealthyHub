import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 23px;
`;

export const WrapperBackAndSelect = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonBack = styled.svg`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

export const UseSelectBack = styled.use``;

export const WrapperSelect = styled.div`
  position: relative;
`;

export const DropdownButton = styled.button`
  position: relative;
  color: var(--color-primary-white);
  background-color: inherit;
  text-align: start;
  padding: 0;
  width: 120px;
  border: none;
  font-family: Poppins;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;

  @media (min-width: 834px) {
    font-size: 30px;
  }
  @media (min-width: 1440px) {
  }
`;

export const SvgSelectDown = styled.svg`
  position: absolute;
  top: 15%;
  width: 24px;
  height: 24px;
  margin-left: 10px;
  margin-right: 10px;
  fill: ${({ $isDropdownOpen }) => ($isDropdownOpen ? 'red' : 'blue')};
  transform-origin: center center;
  transform: ${({ $isDropdownOpen }) =>
    $isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

export const UseSelectDown = styled.use`
  fill: ${({ $isDropdownOpen }) => ($isDropdownOpen ? 'red' : 'blue')};
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 40px;
  z-index: 200;
  display: flex;
  width: 212px;
  max-height: 144px;
  flex-direction: column;
  background-color: #0f0f0f;
  padding-top: 8px;
  padding-bottom: 8px;
  overflow-y: scroll;
  box-shadow: 0px 4px 14px 0px rgba(227, 255, 168, 0.2);
  border-radius: 12px;
  &::-webkit-scrollbar {
    width: 0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #333;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  scrollbar-color: #333 transparent;
  scrollbar-width: thin;
`;

export const DropdownListItem = styled.li`
  color: var(--color-primary-grey);
  display: flex;
  justify-content: start;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  padding-left: 16px;
  padding-top: 4px;
  padding-bottom: 4px;

  &:hover {
    color: #e3ffa8;
    background-color: rgba(255, 255, 255, 0.03);
  }
`;

export const SelectedMonthDisplay = styled.p`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;

  @media (min-width: 834px) {
    font-size: 18px;
    line-height: 24px;
  }
  @media (min-width: 1440px) {
  }
`;
