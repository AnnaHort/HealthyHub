import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const UserInformationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const UserInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserInformationLabel = styled.label`
  color: var(--color-primary-white);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  margin-bottom: 12px;
  font-family: Poppins;
`;

export const UserInformationInput = styled.input`
  max-width: 300px;
  border-radius: 12px;
  border: 1px solid var(--color-primary-grey);
  background: var(--color-primary-black-2);
  padding: 8px 10px;
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  &::placeholder {
    color: var(--color-primary-white);
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.43%;
  }
`;

export const UserInformationPhotoContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const UserInformationIconDirect = styled.svg`
  margin-right: 6px;
  width: 16px;
  height: 16px;
`;
export const UserInformationDownloadLabel = styled.label`
  color: var(--color-primary-white);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
  font-family: Poppins;
`;

export const UserInformationTitle = styled.h3`
  color: var(--color-primary-white);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  margin-bottom: 12px;
  font-family: Poppins;
`;

export const UserInformationRadioBtnContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const UserInformationRadioInput = styled.input`
  opacity: 0;
  position: absolute;
`;
export const UserInformationLabelRadio = styled.label`
  padding-left: 14px;
  font-family: Poppins;
  cursor: pointer;
  color: var(--color-primary-white);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 0;
    width: 12px;
    height: 12px;
    border: 1px solid #b6b6b6;
    background: #0f0f0f;
    border-radius: 50%;
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
    width: 6px;
    height: 6px;
    background: #e3ffa8;
    border-radius: 50%;
    opacity: 0;
    transition: 0.2s ease-in;
  }
  input[type='radio']:checked + &::after {
    opacity: 1;
  }
`;
export const UserInformationRadioContainer = styled.div`
  position: relative;
  display: flex;
`;

export const UserInformationBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const UserInformationSaveBtn = styled.button`
  border-radius: 12px;
  background: var(--color-primary-green-lite);
  border: none;
  padding: 8px 10px;
  color: var(--color-primary-black-2);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  font-family: Poppins;
`;

export const UserInformationLinkCancel = styled(Link)`
  text-align: center;
  color: var(--color-primary-grey);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
`;
