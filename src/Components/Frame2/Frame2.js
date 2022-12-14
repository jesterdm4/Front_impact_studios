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

        {/*
          aplique esto en el componente TexBox porque si lo haces junto se descuadra todo, se encajona quien sabe porque
          y no pasa de los primeros centimetros del div en donde esta metido sin importar su tamaño
        */}

        <div className="TextBoxComponent">
          <TextBox 
          text="experi"
          text2="encia"
          text3="s d"
          text4="e_imp"
          text5="acto"
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
        {/*al final decidi meter todas las manchas, tanto azules como rojas en el mismo componente*/}       

      </div>

    </>
  );
};

export default Frame2;
