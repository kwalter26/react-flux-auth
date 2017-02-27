// Root.js

import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Index from './components/Index';
import ContactDetail from './components/ContactDetail';
import NewContact from './components/NewContact';
import App from './components/App';

class Root extends Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path='/' component={App}>
          <IndexRoute component={Index}/>
          <Route path='/contact/:id' component={ContactDetail} />
          <Route path='/contact' component={NewContact} />
        </Route>
      </Router>
    );
  }
}

export default Root;
