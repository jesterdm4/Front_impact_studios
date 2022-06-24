import React from "react";
import Logo from "../../Assets/logo.svg";
import Buttons from "../../Assets/buttons.svg";
import "./header.scss";

const Header = () => {
  return (
    <>
      <header className="main_header">
        <div>
          <img src={Logo} alt="Logo" />
        </div>

        <div>
          <img src={Buttons} alt="Boton de menu" />
        </div>
      </header>
    </>
  );
};

export default Header;
