import styled from 'styled-components';
import { ReactComponent as AddIcon } from '../../../img/MainPages/add.svg';
import { ReactComponent as DelWater } from '../../../img/MainPages/trash.svg';

//MW --- Main Water

export const MWContainer = styled.div`
`;

export const MWTitle = styled.h2`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 6px;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 32px;
  }
`;

export const MWCard = styled.div`
  position: relative;

  display: flex;
  column-gap: 20px;
  align-items: center;
  padding: 16px 12px;
  width: 300px;
  height: 224px;
  border-radius: 12px;
  background-color: var(--color-primary-black-2);
  margin-bottom: 20px;

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 240px;
    padding: 24px 22px;

    column-gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 444px;
    height: 240px;
    padding: 24px 40px;
  }
`;

export const MWLevelWater = styled.div`
  position: relative;
  width: 80px;
  height: 192px;
  border-radius: 20px;
  border: 1px solid rgba(41, 41, 40, 1);
  background-color: var(--color-primary-black);
  padding: 7px;
`;

export const MWPercentage = styled.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-${({ $offset }) => $offset}px);
  color: ${({ $percentColor }) => $percentColor};
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
`;

export const MWBar = styled.div`
  height: 176px;
  width: 64px;
  border-radius: 20px;
  overflow: hidden;

  span {
    position: absolute;
    bottom: 15px;
    border-radius: 50%;
    pointer-events: none;
    box-shadow: inset 0 0 3px var(--color-primary-violet);

    &::before {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      transform: scale(0.25) translate(-60%, -60%);
      background: radial-gradient(#fff, transparent);
      border-radius: 50%;
    }
  }
`;

export const MWInfoWrapper = styled.div`
  width: 166px;
  height: 148px;

  @media screen and (min-width: 834px) {
    width: 216px;
    height: 126px;
  }
`;

export const MWInfoTitle = styled.p`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  margin-bottom: 12px;

  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const MWValueWrap = styled.div`
  @media screen and (min-width: 834px) {
    display: flex;
    align-items: center;
    column-gap: 40px;
    margin-bottom: 16px;
  }
`;

export const MWInfoNumber = styled.p`
  display: flex;
  align-items: center;
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 34px;
  margin-bottom: 8px;

  @media screen and (min-width: 834px) {
    font-size: 32px;
    line-height: 38px;
    margin-bottom: 0px;
  }
`;

export const MWTextAfterNumber = styled.span`
  color: var(--color-primary-grey);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-left: 4px;
`;

export const MWLeftInfo = styled.p`
  color: var(--color-primary-white);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    margin-bottom: 0px;
  }
`;

export const MWLeftNumber = styled.span`
  color: var(--color-primary-grey);
  font-weight: 500;
  margin-left: 4px;
`;

export const MWButton = styled.button`
  display: flex;
  align-items: center;
  column-gap: 8px;
  width: 166px;
  height: 36px;
  border-radius: 12px;
  border: none;
  padding: 8px 10px;
  background-color: var(--add-water-button-color);

  color: var(--color-primary-black-2);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const MWAddIcon = styled(AddIcon)`
  stroke: var(--color-primary-black-2);
`;

export const MWButtonDel = styled.button`
  position: absolute;
  right: 12px;
  top: 12px;

  background: none;
  border: none;

  @media screen and (min-width: 834px) {
    right: 24px;
    top: 24px;
  }
`;

export const NWDelIcon = styled(DelWater)`

`;
