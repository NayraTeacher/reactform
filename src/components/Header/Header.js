import React from 'react';
import './Header.css';

function Header(props) {
    return (
        <header>
            <h1>Tabla ejercicio {props.ejercicio}</h1>
        </header>
    );
}
export default Header;