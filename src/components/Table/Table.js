import React from "react";
import TBodyMix from "../TBodyMix";
import THead from "../THead";
import './Table.css';

function Table(props) {
    return (
        <section className="container">
            <table>
                <THead columnas={props.cabeceras}></THead>
                <TBodyMix datos={props.filas} handleClick={props.handleClick}></TBodyMix>
            </table>
        </section>
    );
}
export default Table;