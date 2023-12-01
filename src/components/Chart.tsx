import React, { useEffect } from "react";
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
import { memo } from 'react';
import jsonData from "../../data.json"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
  // Title,
  // Tooltip,
  // Legend
);

const Chart = (props: { applyGap: boolean , startDate:any, setStartDate:any,endDate:any,setEndDate:any }) => {
  console.log(props.startDate,"Inside Chart")

  useEffect(() => {
    
  },[props.startDate])

  // const labels = jsonData.data.map((item) => {item.earnings})

  console.log(jsonData,"jsonData")

  const data = {
    labels:jsonData.data.map((item) => item.date),
    datasets: [
      {
        // label: "Dataset 1",
        data:jsonData.data.map((item) => item.earnings),
        // data:`${[{x:props.startDate,y:jsonData.data.map((item) => {item.earnings})}]}`,
        borderColor: "black",
        pointBorderColor: "rgb(255, 99, 132)",
        tension: 0.4,
        pointRadius: 0,
      },
    ],
    options: {
      scales: {
        myScale: {
          type: "",
          position: "right", // `axis` is determined by the position as `'y'`
        },
        xAxes:{
          type:"time"
        },
      },
      
    },
  };  

  const options = {
    scales: { x: { display: false }, y: { display: false } },
    responsive: true,
  
    plugins: {
      legend: {
        // position: 'top' as const,
        display: false,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };
  

  return (
    <>
      <Line options={options} data={data} width={"1100"} />
    </>
  );
};

export default Chart;
