import { WaterChart } from '../../../components/MainPage/Water';

import {
  MWContainer,
  MWTitle,
  MWCard,
  MWLevelWater,
  MWPercentage,
  MWBar,
  MWInfoWrapper,
  MWInfoTitle,
  MWValueWrap,
  MWInfoNumber,
  MWTextAfterNumber,
  MWLeftInfo,
  MWLeftNumber,
  MWButton,
  MWAddIcon,
} from './Water.styled';

export const Water = ({ handleModal, dailyWater, waterAmount }) => {

  const leftWaterIntake = dailyWater - waterAmount;

  const waterPercent =
    waterAmount <= dailyWater ? Math.round((waterAmount * 100) / dailyWater) : 100;

  const offset =
    waterPercent <= 84 ? Math.ceil((waterPercent / 100) * 176 + 10) : 88;

  const percentColor = waterPercent <= 85 ? 'rgba(182, 195, 255, 1)' : 'green';

  return (
    <MWContainer>
      <MWTitle>Water</MWTitle>
      <MWCard>
        <MWLevelWater>
          <MWBar>
            <MWPercentage
              $offset={offset}
              $percentColor={percentColor}
            >{`${waterPercent}%`}</MWPercentage>
            <WaterChart waterIntake={waterPercent} />
          </MWBar>
        </MWLevelWater>
        <MWInfoWrapper>
          <MWInfoTitle>Water consumption</MWInfoTitle>
          <MWValueWrap>
            <MWInfoNumber>
              {waterAmount} <MWTextAfterNumber>ml</MWTextAfterNumber>
            </MWInfoNumber>
            <MWLeftInfo>
              left:
              <MWLeftNumber>
                {leftWaterIntake > 0 ? leftWaterIntake : 0}
              </MWLeftNumber>
              <MWTextAfterNumber>ml</MWTextAfterNumber>
            </MWLeftInfo>
          </MWValueWrap>
          <MWButton onClick={handleModal}>
            <MWAddIcon />
            Add water intake
          </MWButton>
        </MWInfoWrapper>
      </MWCard>
    </MWContainer>
  );
};
