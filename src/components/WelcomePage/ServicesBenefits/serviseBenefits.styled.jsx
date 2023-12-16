import styled from "styled-components";

export const BenegitsContainer = styled.div`
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 444px;
    margin-left: auto;
    margin-right: auto;
  }

 
`;

export const Benefits = styled.ul`
  @media (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    /* display: grid; */
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    flex-wrap: wrap;
    justify-content: space-between;
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
    content: '';
    width: 8px;
    height: 8px;
    background-color: var(--color-primary-green-lite);
    border-radius: 50%;
    display: inline-block;
    margin-right: 6px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-bottom: 0;
    display: flex;
    align-items: center;
    /* margin-right: 8px; */

    &:nth-last-child(1),
    &:nth-last-child(3) {
      margin-right: 0;
    }
  }

  @media (min-width: 1024px) {
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;