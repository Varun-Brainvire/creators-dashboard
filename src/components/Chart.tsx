import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";
import { LineChartDiv } from "./styles/ChartDiv.styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
  // Title,
  // Tooltip,
  // Legend
);

export const options = {
  responsive: true,

  scales: {
    xAxes: [
      {
        ticks: { display: false },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
    ],
    yAxes: [
      {
        ticks: { display: false },
        gridLines: {
          display: false,
          drawBorder: false,
        },
      },
    ],
  },

  plugins: {
    legend: {
      // position: 'top' as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      // label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(0, 0, 0)",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  ],
};

const Chart = () => {
  // console.log(document.getElementsByTagName("canvas"),"canvas")
  return (
    <LineChartDiv>
      <Line options={options} data={data} />;
    </LineChartDiv>
  );
};

export default Chart;
