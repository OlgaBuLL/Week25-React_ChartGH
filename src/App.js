import "./App.css";
import { Chart } from "react-google-charts";

// -------- Pie Chart -------- //
const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

const options = {
  title: "My Daily Activities",
  is3D: true,
};

function App() {
  return (
    <div className="App">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width="100%"
        height="350px"
        legendToggle
      />
    </div>
  );
}

export default App;
