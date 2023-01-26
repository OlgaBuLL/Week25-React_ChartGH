import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppBar from "./AppBar";
import AppBubbleChart from "./BubbleChart";
import AppGantt from "./Gantt_No-Dependencies";
import AppGeoChart from "./GeoChart";
import AppCustomized from "./Customized-Dashboard";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <AppBar />
    <AppBubbleChart />
    <AppGantt />
    <AppGeoChart />
    <AppCustomized />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
