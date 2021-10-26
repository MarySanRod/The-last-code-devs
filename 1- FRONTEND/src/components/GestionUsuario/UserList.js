import React from "react";

class UserList extends React.Component {
  render() {
    const users = this.props.users;
    const userRow = users.map((st, index) => {
      return <tr key={index}>
          <td>{st._id}</td>
          <td>{st.email}</td>
          <td>{st.name}</td>
          <td>{st.role}</td>
          <td>{st.status}</td>
          <td><button type="button" onClick={() => this.props.onEditUser(st)}>editar</button></td>
          <td><button type="button" onClick={() => this.props.onDeleteUser(st._id)}>eliminar</button></td>
      </tr>
    });
    return (
      <div className="lista">
        <table>
          <thead>
            <tr>
              <th>ID</th>
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