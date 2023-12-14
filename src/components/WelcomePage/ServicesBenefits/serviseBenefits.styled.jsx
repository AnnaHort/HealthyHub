import styled from "styled-components";

export const BenegitsContainer = styled.div`
  @media (min-width: 768px) {
    width: 444px;
    margin-left: auto;
    margin-right: auto;
  }

`;

export const Benefits = styled.ul`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const BenefitsList = styled.li`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: var(--color-primary-white);
  margin-bottom: 16px;
  white-space: nowrap;

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

  @media (min-width: 768px) {
    margin-bottom: 0;
    display: flex;
    align-items: center;
  }

`;