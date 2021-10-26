import React from "react";
import { ValidationError } from "./ValidationError";
class UserForm extends React.Component {

  state = {
    errors: {}
  }

  validateForm = (evt) => {
    evt.preventDefault();
    let hasError = false;
    const { user } = this.props;

    const errors = {};

    if (user.email === '') {
      hasError = true;
      errors.email = 'Campo obligatorio';
    }
    if (user.name === '') {
      hasError = true;
      errors.name = 'Campo obligatorio';
    }
    if (user.role === '') {
      hasError = true;
      errors.role = 'Campo obligatorio';
    }
    if (user.status === '') {
      hasError = true;
      errors.status = 'Campo obligatorio';
    } 

    this.setState({ errors: errors })
    console.log(errors);
    if (hasError) {
      return;
    }
    this.props.onSaveUser(evt);
  }

  render() {
    const user = this.props.user;

    return (
      <div className="formularioGU">
        <form onSubmit={this.validateForm}>
          <div className="divGU">
            <label>Email: </label>
            <input className="inputGU" type="email"
              value={user.email}
              onChange={(evt) => this.props.onFormChange({ ...user, email: evt.target.value })} disabled/>
            {this.state.errors.email && <ValidationError messrole={this.state.errors.email} />}
          </div>
          <div className="divGU">
            <label>Nombre: </label>
            <input className="inputGU" type="text"
              value={user.name}
              onChange={(evt) => this.props.onFormChange({ ...user, name: evt.target.value })} disabled/>
            {this.state.errors.name && <ValidationError messrole={this.state.errors.name} />}
          </div>

          <div className="divGU">
            <label>Rol: </label>
            <select className="selectGU" onChange={(evt) => this.props.onFormChange({ ...user, role: evt.target.value })} value={user.role}>
              <option value="Pendiente">Pendiente</option>
              <option value="Administrador">Administrador</option>
              <option value="Ventas">Ventas</option>
            </select>
            {this.state.errors.role && <ValidationError messrole={this.state.errors.role} />}
          </div>

          <div className="divGU">
            <label>Estado: </label>
            <select className="selectGU" onChange={(evt) => this.props.onFormChange({ ...user, status: evt.target.value })} value={user.status}>
              <option value="Desactivado">Desactivado</option>
              <option value="Activado">Activado</option>
            </select>
            {this.state.errors.status && <ValidationError messrole={this.state.errors.status} />}
          </div>

          <div className="divGU">
          <table className="tableGU">
            <tbody>
              <tr className="rowBotones">
                <td>
                  <input className="botonGU" type="submit" value={user._id === -1 ? 'Crear' : 'Editar'} />
                </td>
                <td></td>
                <td>
                  <input className="botonGU" type="button" value="Limpiar" onClick={this.props.onClearUser} />
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </form >
      </div >
    );
  }
}
export default UserForm;