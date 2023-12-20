import WaterDashboar from "./water";
import Calories from "./calories";
import MonthsDashboard from "../months/months";

const LineDashboard = () => {
    return (
        <div>
            <MonthsDashboard/>
            <Calories />
            <WaterDashboar/>
    </div>
)
}

export default LineDashboard;