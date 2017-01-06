import React from 'react';
import {browserHistory} from 'react-router';
import Footer from '../Footer';

export default React.createClass({
  render() {
    return (
      <div className="app-container">
          {this.props.children}
        <Footer />
      </div>
    );
  }
});
