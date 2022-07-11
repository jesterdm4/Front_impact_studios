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
          <p> Construimos </p>
        </div>

        <div className="TextBoxComponent">
          <TextBox 
          text="experiencias de"
          text2="_impacto"
        /></div>

        <div className="TextFrameComponent">
          <TextFrame />
        </div>

        <div className="BlueBoxComponent">
          <BlueBox />
        </div>

        <div className="ArrowComponent">
          <Vector1 />
        </div>

        <BlueBlob1 />
        
        {/*esta pendiente todo lo relacionado con las manchas, ese componente Blueblob1 deberia contener al menos una pero esta vacio por ahora*/}

      </div>

    </>
  );
};

export default Frame2;
