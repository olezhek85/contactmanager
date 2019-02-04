import axios from 'axios'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from '@reach/router'

import { Consumer } from '../../context'

class Contact extends Component {
  state = {
    showContactInfo: false,
  }

  handleShowContactInfo = () => {
    this.setState(prevState => ({
      showContactInfo: !prevState.showContactInfo,
    }))
  }

  handleDeleteContact = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      dispatch({ type: 'DELETE_CONTACT', payload: id })
    } catch (error) {
      console.log(error)
      dispatch({ type: 'DELETE_CONTACT', payload: id })
    }
  }

  render() {
    const { showContactInfo } = this.state
    const { id, name, email, phone } = this.props.contact

    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <div className="card" style={{ marginBottom: '1rem' }}>
              <header className="card-header">
                <p className="card-header-title">
                  {name}
                  <a
                    role="presentation"
                    className="card-header-icon is-paddingless"
                    aria-label="more options"
                    onClick={this.handleShowContactInfo}
                  >
                    <span className="icon">
                      <i className="fas fa-angle-down" aria-hidden="true" />
                    </span>
                  </a>
                </p>
                <Link
                  to={`/contact/edit/${id}`}
                  className="card-header-icon"
                  aria-label="more options"
                  onClick={this.handleShowContactInfo}
                >
                  <span className="icon">
                    <i className="far fa-edit" aria-hidden="true" />
                  </span>
                </Link>
                <a
                  role="presentation"
                  className="card-header-icon"
                  aria-label="more options"
                  style={{ paddingLeft: 0 }}
                  onClick={this.handleDeleteContact.bind(this, id, dispatch)}
                >
                  <span className="icon has-text-danger">
                    <i className="far fa-trash-alt" />
                  </span>
                </a>
              </header>
              {showContactInfo && (
                <div className="card-content">
                  <div className="content">
                    <p className="subtitle is-6">Email: {email}</p>
                    <p className="subtitle is-6">Phone: {phone}</p>
                  </div>
                </div>
              )}
            </div>
          )
        }}
      </Consumer>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
}

export default Contact
