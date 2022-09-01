import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ data = {} }) => {
  const options = {
    responsive: true,
    legend: {
      display: true,
    },
    type: "bar",
  };
  return (
    <div className="barChart-container">
      <Bar data={data} width={null} height={null} options={options} />
    </div>
  );
};

export default BarChart;
