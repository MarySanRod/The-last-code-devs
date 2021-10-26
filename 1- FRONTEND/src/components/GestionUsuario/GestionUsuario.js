import React from "react";
import axios from "axios";
// import '../../Styles/GestionUsuario.css';
import PaginaPrincipal from '../GestionIngreso/PaginaPrincipal'
import UserForm from "./UserForm";
import UserList from "./UserList";

export default class GestionUsuario extends React.Component {
    constructor(props) {
      super(props);
      this.USER_URL = 'http://localhost:5000/users';
      this.emptyUser = { _id: -1, email: '', name: '', role: '', status: '' };
      this.state = {
        users: [],
        selectedUser: this.emptyUser
      };
      this.onFormChange = this.onFormChange.bind(this);
      this.onEditUser = this.onEditUser.bind(this);
      this.onDeleteUser = this.onDeleteUser.bind(this);
      this.onClearUser = this.onClearUser.bind(this);
      this.onSaveUser = this.onSaveUser.bind(this);
    }
  
    componentDidMount() {
      axios.get(this.USER_URL, {
        headers: {
          'token': sessionStorage.getItem('token')
        }
      }).then((resp) => {
  
        console.log('Este es la respuesta de listar usuarios', resp);
  
        this.setState({ users: resp.data });
  
      }).catch(err => {
        console.log('Hubo error listando los usuarios', err);
      });
    }
  
    onFormChange(userCurrentState) {
      console.log('cambió el formulario', userCurrentState);
      this.setState({ selectedUser: userCurrentState });
    }
  
    onEditUser(User) {
      console.log('quiero editar un estudiante', User);
      this.setState({ selectedUser: User });
  
    }
  
    onDeleteUser(userID) {
      console.log('quiero eliminar un estudiante', userID);
      axios.delete(`${this.USER_URL}/${userID}`, {
        headers: {
          'token': sessionStorage.getItem('token')
        }
      }).then(data => {
        this.setState((state, props) => ({
          users: this.state.users.filter(st => st._id !== userID),
          selectedUser: this.emptyUser
        }))
      }).catch(err => {
        console.log('hubo error borrando');
      });
    }
  
    onClearUser() {
      console.log('vamos a limpiar el estudiante');
      this.setState({ selectedUser: this.emptyUser });
    }
  
    onSaveUser(evt) {
      evt.preventDefault();
      const user = this.state.selectedUser;
      if (user.email === '' || user.name=== '' || user.role === '' || user.status === '') {
        alert('Hay errores en el formulario');
        return;
      }
      if (this.state.selectedUser._id === -1) {
        console.log('vamos a hacer un POST', this.state.selectedUser);
        axios.post(this.USER_URL, { ...user, _id: null }, {
          headers: {
            'token': sessionStorage.getItem('token')
          }
        }).then((resp) => {
          console.log('Todo bien con el post', resp);
          this.setState((state, props) => ({
            users: [...state.users, resp.data],
            selectedUser: this.emptyUser
          }))
        }).catch(err => {
          console.log('error al hacer post', err);
        });
      } else {
        console.log('vamos a hacer un PUT', this.state.selectedUser);
        axios.put(`${this.USER_URL}/${user._id}`, { ...user }, {
          headers: {
            'token': sessionStorage.getItem('token')
          }
        }).then((resp) => {
          console.log('Todo bien con el put', resp);
          this.setState((state, props) => ({
            users: state.users.map(st => st._id === user._id ? user : st),
            selectedUser: this.emptyUser
          }))
        }).catch(err => {
          console.log('error al hacer post', err);
        });
      }
    }
  
    render() {
      return (
        <div className="container">
          <UserList
            users={this.state.users}
            onEditUser={this.onEditUser}
            onDeleteUser={this.onDeleteUser}
          />
          <UserForm
            user={this.state.selectedUser}
            onFormChange={this.onFormChange}
            onClearUser={this.onClearUser}
            onSaveUser={this.onSaveUser}
          />
        </div >
      );
    }
  }