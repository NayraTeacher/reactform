import React from 'react';

function THead(props) {
    //columnas es una lista, y hay que mapearla a celdas de tipo cabecera, con una clave
    const cabeceras = props.columnas.map((columna, index) => {
        return <th key={index}>{columna}</th>;
    });

    return(
        <thead>
            <tr>
                {cabeceras}
            </tr>
        </thead>
    );
} 
export default THead;