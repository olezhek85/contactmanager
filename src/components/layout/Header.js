import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'

class Header extends Component {
  state = {
    isOpen: false,
  }

  toggleBurgerMenu = () =>
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }))

  render() {
    const { title } = this.props

    return (
      <nav className="navbar is-danger">
        <div className="container">
          <div className="navbar-brand">
            <Link to={process.env.PUBLIC_URL + '/'} className="navbar-item">
              {title}
            </Link>
            <a
              role="button"
              className={
                this.state.isOpen
                  ? 'navbar-burger burger is-active'
                  : 'navbar-burger burger'
              }
              aria-label="menu"
              aria-expanded="false"
              data-target="navMenu"
              onClick={this.toggleBurgerMenu}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div
            id="navMenu"
            className={
              this.state.isOpen ? 'navbar-menu is-active' : 'navbar-menu'
            }
          >
            <div className="navbar-end">
              <Link to={process.env.PUBLIC_URL + '/'} className="navbar-item">
                <span className="icon is-marginless">
                  <i className="fas fa-home" />
                </span>
                Home
              </Link>
              <Link
                to={process.env.PUBLIC_URL + '/contact/add'}
                className="navbar-item"
              >
                <span className="icon is-marginless">
                  <i className="fas fa-plus" />
                </span>
                Add
              </Link>
              <Link
                to={process.env.PUBLIC_URL + '/about'}
                className="navbar-item"
              >
                <span className="icon is-marginless">
                  <i className="fas fa-question" />
                </span>
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

Header.defaultProps = {
  title: 'My App',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
