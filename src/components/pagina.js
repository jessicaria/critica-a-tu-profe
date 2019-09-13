import React, { Component } from 'react';
import './paginas.css';
import imagen from './logo.png';
import imagen2 from './uach.png';
class Pagina extends Component {
    render() { 
        return (  
            <React.Fragment>
               <div className ="cuerpo">
                   <div className="encabezado">
                        <div className="encabezado1">
                            <div className="encabezado2"><img src={imagen} alt="" ></img></div>
                            <div className="encabezado3"><h1>Critica tu profe</h1></div>
                        </div>
                        <div className="flexsearch">
		                                <div className="flexsearch--wrapper">
			                            <form className="flexsearch--form" action="#" method="post">
				                            <div className="flexsearch--input-wrapper">
					                        <input className="flexsearch--input" type="search" placeholder="search">
				                            </input>
				                            <input className="flexsearch--submit" type="submit" value="&#10140;"/>
                                            </div>
			                            </form>
		                            </div>
                                    
                            </div>
                   </div>
                   <div className="cuer">
                   <div className="bloque">
                   <img className="img-small" src={imagen2} alt="" ></img>
                   </div>
                   <div className="bloque2">carreras ofrecidas</div>
                   </div>


                </div> 
            </React.Fragment>
            
        );

    }
}
 
export default Pagina;