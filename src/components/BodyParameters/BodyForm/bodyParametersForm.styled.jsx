import styled from "styled-components";
import { Form, Field } from 'formik';

export const BodyFormContainer = styled.div`
display: flex;
flex-direction: column;
`;

export const LabelForm = styled.label`
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: var(--color-primary-white);
  margin-top: 24px;
  margin-bottom: 12px;
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const FieldStyled = styled(Field)`
  width: 100%;
  height: 36px;
  padding-left: 10px;
  border-radius: 12px;
  background-color: inherit;
  border: 1px solid var(--color-primary-green-lite);
`;

export const BodyParamsNextButton = styled.button`
  width: 100%;
  height: 36px;
  background-color: var(--color-primary-green-lite);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  color: var(--color-primary-black-2);
  border-radius: 12px;
  margin-top: 40px;
`;

export const BodyParamsBackButton = styled.button`
  width: 100%;
  height: 36px;
  background-color: inherit;
  border: none;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: var(--color-primary-grey);
  border-radius: 12px;
  margin-top: 12px;
`;

