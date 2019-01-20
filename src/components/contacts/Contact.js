import axios from 'axios';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from '@reach/router';

import { Consumer } from '../../context';

const contactInfoStyle = { cursor: 'pointer' };

const removeContactStyle = {
  ...contactInfoStyle,
  float: 'right',
  color: 'red'
};

const editContactStyle = {
  ...removeContactStyle,
  color: 'black',
  marginRight: '1rem'
};

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  handleShowContactInfo = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  handleDeleteContact = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (error) {
      console.log(error);
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    }
  };

  render() {
    const { showContactInfo } = this.state;
    const { id, name, email, phone } = this.props.contact;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{' '}
                <i
                  onClick={this.handleShowContactInfo}
                  className="fas fa-sort-down"
                  style={contactInfoStyle}
                />
                <i
                  className="fas fa-times"
                  style={removeContactStyle}
                  onClick={this.handleDeleteContact.bind(this, id, dispatch)}
                />
                <Link to={`/contact/edit/${id}`}>
                  <i className="fas fa-pencil-alt" style={editContactStyle} />
                </Link>
              </h4>
              {showContactInfo && (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
