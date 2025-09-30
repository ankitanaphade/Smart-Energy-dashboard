import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

function EnergyChart({ data }) {
  const chartData = {
    labels: data.map((d) => d.time),
    datasets: [
      {
        label: "Energy Consumption (kWh)",
        data: data.map((d) => d.consumption),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3,
      },
    ],
  };

  return <Line data={chartData} />;
}

export default EnergyChart;

