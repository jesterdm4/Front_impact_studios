import "./Frame2.scss";
const Frame2 = () => {
  return (
    <>
      <div className="total-frame2-container">
        <div className="first-container">
          <div className="first-div">
            <p>Construimos</p>
          </div>
        </div>

        {/* convertir en un coponente donde puedas user children y una prop para colores, ver componente Text*/}
        <div className="frame2-container">
          <h1 className="text-frame2">experiencias de</h1>
          <h1 className="text-frame2">_impacto</h1>
        </div>
      </div>
    </>
  );
};

export default Frame2;
