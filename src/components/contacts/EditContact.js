import axios from 'axios';
import React, { Component } from 'react';
import { navigate } from '@reach/router';

import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';

class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  async componentDidMount() {
    try {
      const { id } = this.props;
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const { name, email, phone } = response.data;
      this.setState({ name, email, phone });
    } catch (error) {
      console.error(error);
    }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } });
      return;
    }

    const { id } = this.props;

    const updateContact = {
      name,
      email,
      phone
    };

    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        updateContact
      );
      dispatch({ type: 'UPDATE_CONTACT', payload: response.data });
    } catch (error) {
      console.log(error);
    }

    this.setState({ name: '', email: '', phone: '', errors: {} });

    navigate('/');
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Edit Contact</div>
              <div className="card-body">
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
                    value="Update Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
