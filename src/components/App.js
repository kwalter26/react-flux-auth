import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Grid, Row, Col } from 'react-bootstrap';

class AppComponent extends Component {

  componentWillMount() {
    this.lock = new Auth0Lock('gRrBASo6ajIqFb5zYAAhDDYhv0vTELI5', 'kwalter26.auth0.com');
  }

  render() {
    return (
      <div>
        <Header lock={this.lock}></Header>
        <Grid>
          <Row>
            <Col xs={12} md={3}>
              <Sidebar />
            </Col>
            <Col xs={12} md={9}>
              {this.props.children}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default AppComponent;