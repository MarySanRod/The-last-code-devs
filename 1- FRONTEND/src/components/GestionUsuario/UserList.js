import React from "react";

class UserList extends React.Component {
  render() {
    const users = this.props.users;
    const userRow = users.map((st, index) => {
      return <tr key={index}>
          <td className="tdGU">{st._id}</td>
          <td className="tdGU">{st.email}</td>
          <td className="tdGU">{st.name}</td>
          <td className="tdGU">{st.role}</td>
          <td className="tdGU">{st.status}</td>
          <td className="tdBotonGU"><button type="button" onClick={() => this.props.onEditUser(st)}>Editar</button></td>
          <td className="tdBotonGU"><button type="button" onClick={() => this.props.onDeleteUser(st._id)}>Eliminar</button></td>
      </tr>
    });
    return (
      <div className="listaGU">
        <table>
          <thead className="listaHeaderGU">
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Nombre</th>
              <th>Rol</th>
              <th>Estado</th>

            </tr>
          </thead>
          <tbody className="listaHeaderGU">
            {userRow}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UserList;