import styled from "styled-components";
import { Field, Form } from 'formik';

export const Container = styled.div`

`;

export const DashboardForm = styled(Form)`
 
`;

export const LabelDashboard = styled.label`
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  color: var(--color-primary-white);
  margin-bottom: 8px;
`;

export const FieldStyled = styled(Field)`
  -webkit-appearance: none;
  border: none;
  width: 16px;
  height: 16px;
  margin-left: 6px;
  background-color: inherit;
  color: var(--color-primary-green-lite);

  &::-ms-expand {
    display: none;
  }

`;

export const OptionStyled = styled.option`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: var(--color-primary-grey);
`;