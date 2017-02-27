import React, { Component } from 'react';
import { FormGroup, FormControl, HelpBlock, ControlLabel } from 'react-bootstrap';

class NewContactComponents extends Component {

  constructor () {
    super();
    this.state = {
      value: ''
    };
  }

  render () {
    return (
      <div>
        <h3>New Contact form</h3>
        <form>
          <FormGroup>
            <ControlLabel>
              First Name
            </ControlLabel>
            <FormControl
              type='text'
              value={this.state.value}
              placeholder='First Name'
              onChange={this.handleChange} />
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default NewContactComponents;
