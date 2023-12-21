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
`;

export const UserInformationInput = styled.input`
  max-width: 300px;
  border-radius: 12px;
  border: 1px solid var(--color-primary-grey);
  background: var(--color-primary-black-2);
  padding: 8px 10px;
  color: var(--color-primary-white);
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
`;

export const UserInformationTitle = styled.h3`
color: var(--color-primary-white);
font-size: 14px;
font-weight: 500;
line-height: 1.43;
`
