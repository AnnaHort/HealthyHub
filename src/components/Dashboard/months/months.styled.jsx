import styled from 'styled-components';

export const Container = styled.div``;
export const WrapperBackAndSelect = styled.div`
  display: flex;
  align-items: center;
  margin-top: 23px;
`;

export const ButtonBack = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 8px;
 
`;

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
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
`;

export const SvgSelectDown = styled.svg`
  position: absolute;
  top: 35%;
  width: 24px;
  height: 24px;
  margin-left: 10px;
`;

export const UseSelect = styled.use``;

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
  color: var(--color-primary-grey);
`;
