import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import MainContent from "../MainContent/MainContent";

const Home = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Home;
