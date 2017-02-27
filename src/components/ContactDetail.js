import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import ContactActions from '../actions/ContactActions';
import ContactStore from '../stores/ContactStore';

class ContactDetailComponent extends Component {

  constructor () {
    super();
    this.state = {
      contact: {},
      editing: false
    };
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount () {
    ContactStore.addChangeListener(this.onChange);
  }

  componentDidMount () {
    ContactActions.getContact(this.props.params.id);
  }

  componentWillUnmount () {
    ContactStore.removeChangeListener(this.onChange);
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      contact: ContactActions.getContact(nextProps.params.id)
    });
  }

  onChange () {
    this.setState({
      contact: ContactStore.getContact(this.props.params.id),
      editing:false
    });
  }

  render () {
    let contact;
    if (this.state.contact) {
      contact = this.state.contact;
    }
    return (
      <div>
        {this.state.contact &&
         <div>
           {!this.state.editing ? (
              <div>
                <img src={contact.image} width='150' />
                <h1>{contact.name}</h1>
                <h3>{contact.email}</h3>
              </div>
              ) : (
              <div>
                <img src={contact.image} width='150' />
                <h1>{contact.name}</h1>
                <h3>{contact.email}</h3>
              </div>
              )}
         </div>}
         <Button bsStyle="primary">Edit</Button>
      </div>
    );
  }
}

export default ContactDetailComponent;
