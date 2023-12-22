import WaterDashboar from "./water";
import Calories from "./calories";
import MonthsDashboard from "../months/months";
import WeightCharts from "./weight";

const LineDashboard = () => {
    return (
        <div>
            <MonthsDashboard/>
            <Calories />
            <WaterDashboar />
            <WeightCharts/>
    </div>
)
}

export default LineDashboard;