import React from "react";
import Header from "./Header/Header";
import Harvest from "./Harvest/Harvest";

const MainContent = () => {
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <Harvest />
    </div>
  );
};

export default MainContent;
