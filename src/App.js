import './App.css';
import Header from './components/Header';
import TTable from './components/TTable';
import TForm from './components/TForm/TForm';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      cabecera: ['Nombre', 'Apellidos', 'Fecha de Nacimiento', 'Contratado', 'Borrar'],
      datos: [
        {nombre: 'Pepa', apellidos: 'Flores', fecha: '2/02/2002', contratado: true, boton: 'borrar'},
        {nombre: 'Luis', apellidos: 'Garcia', fecha: '8/8/1998', contratado: false, boton: 'borrar'},
        {nombre: 'Tomas', apellidos: 'Rodriguez', fecha: '7/7/1997', contratado: true, boton: 'borrar'}
      ]
    }

    //Binding del manejador del evento para que sepa que es 'this'
    this.handleClick = this.handleClick.bind(this);
    this.handleNewRow = this.handleNewRow.bind(this);
  }

  handleClick(i) {
    const nuevasFilas = this.state.datos.filter((fila, index) => {
      //funcion de filtrado, devuelve las filas cuyo indice es distinto al que queremos eliminar
      //Es una funcion de javascript, para filtrar arrays, ver referencia: https://www.w3schools.com/jsref/jsref_filter.asp
      return index !== i;
    });
    this.setState({datos: nuevasFilas});
  }

  handleNewRow(dato) {
    const copiadatos = this.state.datos.slice();
    copiadatos.push(dato);
    this.setState({datos: copiadatos});
  }

  render() {
    return (
      <div className="App">
        <Header ejercicio="Empleados con formulario y material-ui"></Header>
        <TTable cabeceras={this.state.cabecera} filas={this.state.datos} handleClick={this.handleClick}></TTable>
        <TForm adddato={this.handleNewRow}></TForm>
      </div>
    );
  }
}


export default App;
