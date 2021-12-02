import React from "react";

function TBody(props){
    const datos = props.datos.map((fila, i) => {
        return (
            <tr key={i}> {
                fila.map((celda, j) => {
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

export default TBody;