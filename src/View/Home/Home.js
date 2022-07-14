import React from "react";
import "./home.scss";
import { Frame2, Header, Frame3, Frame4 } from "../../Components";


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
      
    </>
  );
};
export default Home;
