import React from "react";
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

function TBodyJson(props){
    const datos = props.datos.map((dato, i) => {
        return (
            <TableRow key={i}>
                <TableCell>{dato.nombre}</TableCell>
                <TableCell>{dato.apellidos}</TableCell>
                <TableCell>{dato.fecha}</TableCell>
                <TableCell><img height="50px" src={dato.contratado ? 'ok.png' : 'ko.png'} alt={dato.nombre} /></TableCell>
                <TableCell><Button variant="contained" color="primary"  onClick={() => {props.handleClick(i)}}>Borrar</Button></TableCell>
            </TableRow>
        );
    }
    
    );

    return(
        <TableBody id="table_body">
            {datos}
        </TableBody>
    );

}

export default TBodyJson;