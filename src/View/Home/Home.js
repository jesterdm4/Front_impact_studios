import React from "react";
import "./home.scss";
import { Frame2, Header, Frame3 } from "../../Components";


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
      
    </>
  );
};
export default Home;
