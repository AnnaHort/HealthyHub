import styled from 'styled-components';

export const ProfileSettingsPageContainer = styled.div`
  /* padding: 16px 10px 40px 10px; */
  padding-top: 16px;
  padding-bottom: 40px;
  max-width: 320px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 834px) {
    padding: 24px 27px 174px 27px;
    max-width: 840px;
  }
  @media (min-width: 1440px) {
    display: flex;
    padding: 20px 34px;
    max-width: 1440px;
  }
`;

export const ProfileSettingsPageTitle = styled.h2`
  color: var(--color-primary-white);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.26;
  margin-bottom: 16px;
  @media (min-width: 834px) {
    font-size: 30px;
    line-height: 1.2;
    margin-bottom: 20px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 24px;
  }
`;

export const ProfileSettingsPageImg = styled.img`
  width: 300px;
  max-height: 296px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 834px) {
    max-height: 374px;
    width: 380px;
    margin-bottom: 24px;
  }
  @media (min-width: 1440px) {
    max-height: 528px;
    margin-right: 0;
    margin-left: 0;
    width: 536px;

  }
`;

// export const Img = styled.div`
//   margin: 0 auto;
//   width: 300px;
//   height: 296px;

//   @media (min-width: 834px) {
//     width: 380px;
//     height: 374px;
//   }

//   @media (min-width: 834px) {
//     width: 536px;
//     height: 528px;
//   }
// `;
