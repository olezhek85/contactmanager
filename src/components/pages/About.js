import React from 'react'
import pack from '../../../package.json'

const About = () => (
  <React.Fragment>
    <h1 className="title is-1" style={{ marginTop: '1rem' }}>
      About Contact Manager
    </h1>
    <h1 className="subtitle is-3">Simple app to manage contacts</h1>
    <h1 className="subtitle is-6">Version {pack.version}</h1>
  </React.Fragment>
)

export default About
