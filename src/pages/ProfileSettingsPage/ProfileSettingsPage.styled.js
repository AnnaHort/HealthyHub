import styled from 'styled-components';

export const ProfileSettingsPageContainer = styled.div`
  padding: 16px 10px;
  max-width: 320px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 834px) {
    padding: 24px 27px;
    max-width: 840px;
  }
  @media (min-width: 1440px) {
    padding: 20px 34px;
    max-width: 1440px;
  }
`;

export const ProfileSettingsPageTitle = styled.h2`
  color: var(--color-primary-white);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.26;
  @media (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
  }
`;

export const ProfileSettingsPageImg = styled.img`
  width: 300px;
  max-height: 296px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 834px) {
    width: 380px;
  }
  @media (min-width: 1440px) {
    margin-right: 0;
    margin-left: 0;
    width: 536px;
  }
`;
