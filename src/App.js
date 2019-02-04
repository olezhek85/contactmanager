import React from 'react'
import { Router } from '@reach/router'

import About from './components/pages/About'
import Header from './components/layout/Header'
import NotFound from './components/pages/NotFound'
import AddContact from './components/contacts/AddContact'
import ContactList from './components/contacts/ContactList'
import EditContact from './components/contacts/EditContact'

import 'bulma/css/bulma.min.css'

const App = () => (
  <React.Fragment>
    <Header title="Contact Manager" />
    <div className="container">
      <Router basepath={process.env.PUBLIC_URL} primary={false}>
        <ContactList path="/" />
        <About path="about" />
        <AddContact path="contact/add" />
        <EditContact path="contact/edit/:id" />
        <NotFound default />
      </Router>
    </div>
  </React.Fragment>
)

export default App
