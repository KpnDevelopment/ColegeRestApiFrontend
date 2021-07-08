import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { courseUrl } from "../../utils/url";
function Chart() {
  const [course, setCourse] = useState();
  useEffect(() => {
    fetchCourse();
  });
  const fetchCourse = async () => {
    const response = await axios.get(courseUrl);
    // console.log(response.data.length);
    setCourse(response.data.length);
    console.log(course);
  };
  const coueseNo = Number(course);
  // set data
  const [barData, setBarData] = useState({
    labels: ["Course", "label 2", "label 3", "label 4"],
    datasets: [
      {
        label: "Chart For College",
        barPercentage: 0.5,
        barThickness: 80,
        maxBarThickness: 100,
        minBarLength: 2,
        data: [10, 10, 20, 20],
        fill: false,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  });
  // set options
  const [barOptions, setBarOptions] = useState({
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
      title: {
        display: true,
        text: "Data Orgranized In Bars",
        fontSize: 25,
      },
      legend: {
        display: true,
        position: "top",
      },
    },
  });
  return (
    <div
      style={{
        display: "flex",
        width: "50vw",
        height: "50vh",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Bar data={barData} options={barOptions} />
    </div>
  );
}

export default Chart;
