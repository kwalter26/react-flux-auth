import AppDispatcher from '../dispatcher/AppDispatcher';
import ContactConstants from '../constants/ContactConstants';
import ContactsAPI from '../utils/ContactsAPI';

export default {
  recieveContacts: () => {
    ContactsAPI
      .getContacts('/api/contacts')
      .then(contacts => {
        AppDispatcher.dispatch({
          actionType: ContactConstants.RECIEVE_CONTACTS,
          contacts: contacts
        });
      })
      .catch(message => {
        AppDispatcher.dispatch({
          actionType: ContactConstants.RECIEVE_CONTACTS_ERROR,
          message: message
        });
      });
  },

  getContact: (id) => {
    ContactsAPI
      .getContact('/api/contacts/' + id)
      .then(contact => {
        AppDispatcher.dispatch({
          actionType: ContactConstants.RECIEVE_CONTACT,
          contact: contact
        });
      })
      .catch(message => {
        AppDispatcher.dispatch({
          actionType: ContactConstants.RECIEVE_CONTACT_ERROR,
          message: message
        });
      });
  }

};
