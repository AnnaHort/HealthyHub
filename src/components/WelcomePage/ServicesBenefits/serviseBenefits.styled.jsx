import styled from "styled-components";

export const BenefitsList = styled.li`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: var(--color-primary-white);
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  &:before {
    content: '•';
    color: var(--color-primary-green-lite);
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 6px;
  }
`;