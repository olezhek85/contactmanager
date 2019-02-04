import React, { Component, Fragment } from 'react'

import Contact from './Contact'
import { Consumer } from '../../context'

class ContactList extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value
          return (
            <Fragment>
              <h1 className="title is-size-1" style={{ marginTop: '1rem' }}>
                <span className="has-text-danger">Contact</span> List
              </h1>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </Fragment>
          )
        }}
      </Consumer>
    )
  }
}

export default ContactList
