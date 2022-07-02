import TextBox from "../TextBox/TextBox";
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

        {/* 
        
        antes el div frame2-container estaba asi
        
          <div className="frame2-container">
            <h1 className="text-frame2">experiencias de</h1>
            <h1 className="text-frame2">_impacto</h1>
          </div>
        
        pero al reahcerlo de esta manera

          <div className="frame2-container">
            <h1 className="text-frame2">experiencias de_impacto</h1>
          </div>

        agarro correctamente, osea, se ve como deberia
        
        */
        
        }
        <div className="frame2-container">
          <h1 className="text-frame2">experiencias de_impacto</h1>
        </div>

        {/*
        
        comentario previo a la introduccion de la segunda prop en el componente TextBox

          por otro lado, el componente textBox tiene un limite de 18 caracteres,
          independientemente de lo escrito en el ni hara crecer el div que lo
          contiene ni tampoco se extendera mas alla de el, creara un salto de 
          linea automaticamente, este mismo salto ocurre cuando se usa un espacio
          en al gun punto de la propiedad text 






        comentario despues de la introduccion de la segunda prop

          ahora la barra de espacio solo genera un salto de linea si esta 
          despues del caracter 13, antes si se toma como espacio normal
            
            sera por esto que se separo la palabra con un piso??

                es posible darle un estilo especifico a cada prop del componente?

          
          al final se logro posicionar el texto correctamente gracias a tener 2 props 
          y que se eliminara el comando   transform: rotate(-2deg);   de las letras para
          solo dejarse en el contenedor, esto mueve no solo el contenedor si no todo 
          lo que tiene dentro, el detalle con esto es que nunca se soluciono el problema
          principal de que se genera el salto de linea

        */}

        <TextBox 
          text="experiencias de"
          text2="_impacto"
        />

        {/*
          ambos scss, tanto del frame2-container y su texto como el scss del componente 
          TextBox son identicos (exepto por la linea   transform: rotate(-2deg);  en su texto),
          osea que el problema reside en el componente

          sera que una propiedad de texto tiene limites de caracteres? ---> pues al parecer no C=

            en caso de ser de ayuda este problema tambien ocurre en first-container, por suerte al ser solo una palabra los saltos de linea por barra 
            de espacio no resultan un problema
        */}

      </div>

      
    </>
  );
};

/*rafce*/

export default Frame2;
