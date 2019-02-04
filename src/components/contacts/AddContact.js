import axios from 'axios'
import React, { Component } from 'react'
import { navigate } from '@reach/router'

import { Consumer } from '../../context'
import TextInputGroup from '../layout/TextInputGroup'

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {},
  }

  handleChange = ({ target }) => this.setState({ [target.name]: target.value })

  handleSubmit = async (dispatch, e) => {
    e.preventDefault()
    const { name, email, phone } = this.state

    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } })
      return
    }

    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } })
      return
    }

    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } })
      return
    }

    const newContact = {
      name,
      email,
      phone,
    }

    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/users',
        newContact
      )
      dispatch({ type: 'ADD_CONTACT', payload: response.data })
    } catch (error) {
      console.error(error)
    }

    this.setState({ name: '', email: '', phone: '', errors: {} })

    navigate(process.env.PUBLIC_URL + '/')
  }

  render() {
    const { name, email, phone, errors } = this.state

    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <div
              className="card"
              style={{ marginBottom: '3rem', marginTop: '1rem' }}
            >
              <header className="card-header">
                <p className="card-header-title">Add Contact</p>
              </header>
              <div className="card-content">
                <form onSubmit={this.handleSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name..."
                    value={name}
                    onChange={this.handleChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter Email..."
                    value={email}
                    onChange={this.handleChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone..."
                    value={phone}
                    onChange={this.handleChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    value="Add Contact"
                    className="button is-link"
                  />
                </form>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default AddContact
