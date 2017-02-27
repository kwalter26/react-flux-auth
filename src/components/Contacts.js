import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router'
import ContactActions from '../actions/ContactActions';
import ContactStore from '../stores/ContactStore';
import ContactListItem from './ContactListItem';

function getContactListItem (contact) {
  return (
    <ContactListItem key={contact.id} contact={contact} />
  );
}
class ContactsComponent extends Component {

  constructor () {
    super();
    this.state = {
      contacts: []
    };
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount () {
    ContactStore.addChangeListener(this.onChange);
  }

  componentDidMount () {
    ContactActions.recieveContacts();
  }

  componentWillUnmount () {
    ContactStore.removeChangeListener(this.onChange);
  }

  onChange () {
    this.setState({
      contacts: ContactStore.getContacts()
    });
  }

  render () {
    let contactListItems;
    if (this.state.contacts) {
      contactListItems = this.state.contacts.map(contact => getContactListItem(contact));
    }
    return (
      <div>
        <ListGroup>
          {contactListItems}
          <ListGroupItem>
            <Link to={`/contact`}>
              <h4>New Contact</h4>
            </Link>
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

export default ContactsComponent;
