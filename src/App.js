import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import About from './components/pages/About';
import Header from './components/layout/Header';
import NotFound from './components/pages/NotFound';
import AddContact from './components/contacts/AddContact';
import ContactList from './components/contacts/ContactList';
import EditContact from './components/contacts/EditContact';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Contact Manager" />
        <div className="container">
          <Switch>
            <Route exact path="/" component={ContactList} />
            <Route path="/about" component={About} />
            <Route path="/contact/add" component={AddContact} />
            <Route path="/contact/edit/:id" component={EditContact} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
