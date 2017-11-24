import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginForm from './components/LoginForm.js'
import UsersContainer from './components/UsersContainer.js'
import NewUserForm from './components/NewUserForm.js'



class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" render={()=>(<h1>syncedIn Home</h1>)}/>
        <Switch>
          <Route exact path="/login" render={()=>(<LoginForm/>)}/>
          <Route exact path="/users/new" render={()=>(<NewUserForm/>)}/>
          <Route path="/users" render={(props)=>(<UsersContainer {...props}/>)}/>
        </Switch>
      </div>
    );
  }
}

export default App;
