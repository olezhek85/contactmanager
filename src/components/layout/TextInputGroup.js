import React from 'react'
import PropTypes from 'prop-types'

const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error,
}) => {
  return (
    <div className="field">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <div className="control">
        <input
          type={type}
          name={name}
          className={`input ${error ? 'is-danger' : ''}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
      {error && <p className="help is-danger">{error}</p>}
    </div>
  )
}

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
}

TextInputGroup.defaultProps = {
  type: 'text',
}

export default TextInputGroup
