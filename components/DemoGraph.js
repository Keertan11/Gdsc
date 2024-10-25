import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LineElement, LinearScale, PointElement, Title, Tooltip, Legend, Filler);

const MyLineChart = () => {
  // X - axis lable
  const labels = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug"];

  // Data want to show on chart
  const datasets = [12, 45, 67, 43, 89, 34, 67, 43];

  const data = {
    labels: labels,
    datasets: [
      {
        // Title of Graph
        label: "Example Dataset",
        data: datasets,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="w-full">
      <Line data={data} />
    </div>
  );
};

export default MyLineChart;