import React, { Component } from 'react';
import './paginas.css';
class HolaMundo extends Component {
    render() { 
        return (  
            <React.Fragment>
               <div className ="cuerpo">
                   <div className="encabezado">
                    <div className="encabezado1">
                    <h1>Quetzal HEADPHONES</h1>
                    </div>
                    <div className="encabezado2">
                    <div className="bloque"><h1>Inicio</h1></div>
                    <div className="bloque"><h1>Empresa</h1></div>
                    <div className="bloque"><h1>Cv</h1></div>
                    <div className="bloque"><h1>Blog</h1></div>
                    <div className="bloque"><h1>Contacta</h1></div>
                    </div>
                   </div>
                   <div className="cuer">

                   </div>
                   <div className="base">

                   </div>
                </div> 
            </React.Fragment>
            
        );

    }
}
 
export default HolaMundo;