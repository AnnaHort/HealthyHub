import { ReactComponent as BubbleSvg } from '../../../img/MainPages/bubble.svg';
import { ReactComponent as MilkSvg } from '../../../img/MainPages/milk.svg';

import {
    MDGContainer,
    MDGTitle,
    MDGInfoTitle,
    MDGInfoCard,
    MDGCardWrapper,
    MDGInfoNumber,
    Unit,
    MDGInfoWrapper,
} from './DailyGoal.styled';


export const DailyGoal = ({ dailyCalories, dailyWater }) => {
    return (
        <MDGContainer>
            <MDGTitle>Daily goal</MDGTitle>
            <MDGInfoCard>
                <MDGCardWrapper>
                    <BubbleSvg />
                    <MDGInfoWrapper>
                        <MDGInfoTitle>Calories</MDGInfoTitle>
                        <MDGInfoNumber>{dailyCalories}</MDGInfoNumber>
                    </MDGInfoWrapper>
                    <MilkSvg />
                    <MDGInfoWrapper>
                        <MDGInfoTitle>Water</MDGInfoTitle>
                        <MDGInfoNumber>{dailyWater}<Unit>ml</Unit>
                        </MDGInfoNumber>
                    </MDGInfoWrapper>
                </MDGCardWrapper>
            </MDGInfoCard>
        </MDGContainer>
    );
};