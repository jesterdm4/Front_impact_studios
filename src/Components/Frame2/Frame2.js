import TextBox from "../TextBox/TextBox";
import "./Frame2.scss";
import TextFrame from "../TextFrame/TextFrame";
import BlueBox from "../BlueBox/BlueBox";
import Vector1 from "../Vector1/Vector1";
import BlueBlob1 from "../BlueBlob1/BlueBlob1";

const Frame2 = () => {
  return (
    <>
      <div className="total-frame2-container">
        <div className="first-container">
          <div className="first-div">
            <p>Construimos</p>
          </div>
        </div>

        <TextBox 
          text="experiencias de"
          text2="_impacto"
        />

        <TextFrame />

        <BlueBox />

        <Vector1 />

        <BlueBlob1 />

      </div>

    </>
  );
};

export default Frame2;
