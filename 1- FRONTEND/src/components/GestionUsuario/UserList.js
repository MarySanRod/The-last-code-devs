import React from "react";
import axios from "axios";

class UserList extends React.Component {
  
  constructor(props){
    super(props);
    this.USER_URL = 'http://localhost:5000/users';
  }
  actualizarUser(e){
    const role = e.target.value;
    axios.put(this.USER_URL, {
        headers: {
          'token': sessionStorage.getItem('token')
        }
      }).then((resp) => {
        console.log('Este es la respuesta de listar usuarios', resp);
        this.setState({ role : role });
      }).catch(err => {
        console.log('Hubo error listando los usuarios', err);
      });
  }
  
  render() {
    const users = this.props.users;
    const userRow = users.map((st, index) => {
      return <tr key={index}>
        <td>{st.email}</td>
        <td>{st.name}</td>
        <td>{st.role}</td>
        <td>{st.status}</td>
        {/* <td><button type="button" onClick={() => this.props.onEditUser(st)}>editar</button></td>
        <td><button type="button" onClick={() => this.props.onDeleteUser(st._id)}>eliminar</button></td> */}
        
      </tr>
    });
    return (
      <div className="lista">
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Nombre</th>
              <th>Rol</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {userRow}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserList;