import TextBox from "../TextBox/TextBox";
import "./Frame2.scss";
import TextFrame from "../TextFrame/TextFrame";

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

      </div>

      
    </>
  );
};

export default Frame2;
