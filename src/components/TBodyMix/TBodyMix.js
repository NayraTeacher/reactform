import React from "react";

function TBodyMix(props){
    const datos = props.datos.map((fila, i) => {
        return (
            <tr key={i}> {
                fila.map((celda, j) => {
                    //Tener en cuenta el contenido de la celda para renderizar una imagen, un boton...
                    if(celda === "Si" || celda === "No" || typeof(celda)==Boolean){
                        return (
                            <td key={j}>
                                <img height="50px" src ={ (celda==="Si" || celda === true) ? 'ok.png' : 'ko.png' } alt={(celda==="Si") ? 'ok' : 'ko' } />
                            </td>
                        );
                    } else if (celda === "borrar"){
                        return (
                            <td key={j}>
                                <button onClick={() => {props.handleClick(i)}} >Borrar</button>
                            </td>
                        );
                    } else           
                        return <td key={j}>{celda}</td>;                    
                })
            }
            </tr>
        );
    }
    
    );

    return(
        <tbody id="table_body">
            {datos}
        </tbody>
    );

}

export default TBodyMix;