
import MonthsDashboard from "../months/months";
import WeightCharts from "./weight";
import styled from "styled-components";
import CaloriesDashboard from "./calories";
import WaterDashboar from "./water";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUserStatictic } from "../../../redux/dashboardPage/operation";

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

    // const date = new Date.now().getFullYear();

    // const months = [
    //   'January',
    //   'February',
    //   'March',
    //   'April',
    //   'May',
    //   'June',
    //   'July',
    //   'August',
    //   'September',
    //   'October',
    //   'November',
    //   'December',
    // ];

  //   const [currentMonthsIndex, setCurrentMonthsIndex] = useState(
  //     new Date.getMonth()
  //   );

  const dispatch = useDispatch();
  // const monthsData = useSelector();

  useEffect(() => {
    dispatch(fetchUserStatictic())
  },[dispatch])
    return (
      <div>
        <MonthsDashboard />
        <DashboardContainer>
          <CaloriesDashboard />
          <WaterDashboar/>
        </DashboardContainer>
        <WeightContainerStyle>
          <WeightCharts />
        </WeightContainerStyle>
      </div>
    );
}

export default LineDashboard;