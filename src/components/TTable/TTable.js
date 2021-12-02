import React from "react";
import TBodyJson from "../TBodyJson";
import TBodyMix from "../TBodyMix";
import THead from "../THead";
//import './TTable.css';
import Table from '@mui/material/Table';

function TTable(props) {
    return (
        <section className="container">
            <Table>
                <THead columnas={props.cabeceras}></THead>
                {/* <TBodyMix datos={props.filas} handleClick={props.handleClick}></TBodyMix> */}
                <TBodyJson datos={props.filas} handleClick={props.handleClick}></TBodyJson>
            </Table>
        </section>
    );
}
export default TTable;