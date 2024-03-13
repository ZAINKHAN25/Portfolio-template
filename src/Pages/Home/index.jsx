import React from 'react';
import Navbar from "../../Components/Navbar/index.jsx";
import HomeComponent from "../../Components/HomeComponent/index.jsx";
import "./Home.css"

function Home() {
  return (
    <div className="body">
      <Navbar />
      <HomeComponent/>
    </div>
  )
}


export default Home;