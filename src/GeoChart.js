import "./App.css";
import { Chart } from "react-google-charts";

// -------- Geo Chart -------- //

const dataGeoChart = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700],
];

function AppGeoChart() {
  return (
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chartGeoChart = chartWrapper.getChart();
            const selectionGeoChart = chartGeoChart.getSelection();
            if (selectionGeoChart.length === 0) return;
            const region = dataGeoChart[selectionGeoChart[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={dataGeoChart}
    />
  );
}

export default AppGeoChart;
