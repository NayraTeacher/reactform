import React from "react";

class TForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      apellidos: "",
      fecha: "",
      contratado: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    if (name === "fecha")
        value=new Date(value).toISOString().substring(0,10);

    this.setState( {[name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.adddato(this.state);
    this.setState({
        nombre: "",
        apellidos: "",
        fecha: "",
        contratado: false,
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Nombre:<input type="text" name="nombre" value={this.state.nombre} onChange={this.handleChange}/></label>
        <label>Apellidos:<input type="text" name="apellidos" value={this.state.apellidos} onChange={this.handleChange}/></label>
        <label>Fecha:<input type="date" name="fecha" 
            value={this.state.fecha} 
            onChange={this.handleChange}/>
        </label>
        <label>Contrato:<input type="checkbox" name="contratado" checked={this.state.contratado} onChange={this.handleChange}></input></label>
        <input type="submit" value="Añadir" />
      </form>
    );
  }
}

export default TForm;
