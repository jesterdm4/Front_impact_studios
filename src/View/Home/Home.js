import React from "react";
import "./home.scss";
import { Header, Frame2, Frame3, Frame4, Frame5 } from "../../Components";


const Home = (props) => {
  return (
    <>
      <div className="black-container">
        <Header />

        <Frame2 />

      </div>

      <div className="Frame3">
        <Frame3 />

      </div>

      <div className="Frame4">
        <Frame4 />

      </div>

      <div className="Frame5">
      <Frame5 />

      </div>
      
    </>
  );
};
export default Home;
