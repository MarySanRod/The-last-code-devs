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
    this.props.onSaveuser(evt);
  }

  onEmailChange = (evt) => {
    const user = this.props.user;
    const newUser = { ...user, email: parseInt(evt.target.value) };
    console.log('cambió el email', evt.target.value, user, newUser);
    this.props.onFormChange(newUser);
  }

  render() {
    const user = this.props.user;

    return (
      <div className="formulario">
        <form onSubmit={this.validateForm}>
          <div>
            <label>Email</label>
            <input type="number"
              value={user.email}
              onChange={this.onEmailChange} />
            {this.state.errors.email && <div style={{ color: '#ff0000' }}>{this.state.errors.email}</div>}
          </div>
          <div>
            <label>Nombre</label>
            <input type="text"
              value={user.name}
              onChange={(evt) => this.props.onFormChange({ ...user, name: evt.target.value })} />
            {this.state.errors.name && <ValidationError messrole={this.state.errors.name} />}
          </div>
          <div>
            <label>Rol</label>
            <input type="number"
              value={user.role}
              onChange={(evt) => this.props.onFormChange({ ...user, role: parseInt(evt.target.value) })} />
            {this.state.errors.role && <div>{this.state.errors.role}</div>}
          </div>
          <div>
            <label>Estado</label>
            <input type="number"
              value={user.status}
              onChange={(evt) => this.props.onFormChange({ ...user, status: parseInt(evt.target.value) })} />
            {this.state.errors.status && <div>{this.state.errors.status}</div>}
          </div>
          <input type="submit" value={user._id === -1 ? 'Crear' : 'Editar'} />
          <input type="button" value="Limpiar" onClick={this.props.onClearuser} />
        </form >
      </div >
    );
  }
}
export default UserForm;