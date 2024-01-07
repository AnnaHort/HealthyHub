import MonthsDashboard from "../months/months";
import WeightCharts from "./weight";
import styled from "styled-components";
import CaloriesDashboard from "./calories";
import WaterDashboar from "./water";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUserStatictic } from "../../../redux/dashboardPage//dashboardOperation";
import { getUserMonthsFood, getUserMonthsWater, } from "../../../redux/dashboardPage/dashboardSelector";


const DashboardContainer = styled.div`
  max-width: 780px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 834px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1440px) {
    min-width: 1440px;
    margin-left: unset;
    margin-right: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 20px;
    margin-top: 16px;
    margin-bottom: 20px;
  }
`;

const WeightContainerStyle = styled.div`
  max-width: 780px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 834px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 1440px) {
    min-width: 1440px;
    margin-left: unset;
    margin-right: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 20px;
    margin-top: 16px;
    margin-bottom: 20px;
  }
`;

const LineDashboard = () => {
  const dispatch = useDispatch();
  const monthsDataFood = useSelector(getUserMonthsFood);
  const monthsDataWater = useSelector(getUserMonthsWater);


  const currentMonth = new Date().getMonth() + 1; 
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  useEffect(() => {
    dispatch(fetchUserStatictic(selectedMonth));
  }, []);

  useEffect(() => {
    dispatch(fetchUserStatictic(selectedMonth));
  }, [selectedMonth]);

  //  console.log('info months Calories:', monthsDataFood);
  //  console.log('Data passed to WaterDashboar:', monthsDataWater);

    // console.log("currentMonth", currentMonth);
  return (
    <div>
      <MonthsDashboard
        selectedMonth={selectedMonth}
        setMonth={setSelectedMonth}
      />
      <DashboardContainer>
        <CaloriesDashboard
          data={monthsDataFood}
          selectedMonth={selectedMonth}
        />
        <WaterDashboar data={monthsDataWater} selectedMonth={selectedMonth} />
      </DashboardContainer>
      <WeightContainerStyle>
        <WeightCharts />
      </WeightContainerStyle>
    </div>
  );
};


export default LineDashboard;
