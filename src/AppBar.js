import "./App.css";
import { Chart } from "react-google-charts";

// -------- Bar Chart -------- //

const dataBar = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
];

const optionsBar = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
};

function AppBar() {
  return (
    <div className="AppBar">
      <Chart
        chartType="Bar"
        width="100%"
        height="350px"
        data={dataBar}
        options={optionsBar}
      />
    </div>
  );
}

export default AppBar;
