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


export const DailyGoal = ({ dailyCalories }) => {
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
                        <MDGInfoNumber>
                            1500<Unit>ml</Unit>
                        </MDGInfoNumber>
                    </MDGInfoWrapper>
                </MDGCardWrapper>
            </MDGInfoCard>
        </MDGContainer>
    );
};