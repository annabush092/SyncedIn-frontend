import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import LoginForm from './components/LoginForm.js'
import UsersContainer from './components/UsersContainer.js'
import NewUserForm from './components/NewUserForm.js'



class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" render={()=>(<div>Hello from App</div>)}/>
        <Route path="/login" render={()=>(<LoginForm/>)}/>
        <Route exact path="/users" render={()=>(<UsersContainer/>)}/>
        <Route path="/users/new" render={()=>(<NewUserForm/>)}/>
      </div>
    );
  }
}

export default App;
