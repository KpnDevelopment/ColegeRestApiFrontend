import React from "react";
import Chart from "./Chart";
import TopCards from "./TopCards";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TopCards />
      <Chart />
    </div>
  );
}

export default Home;
