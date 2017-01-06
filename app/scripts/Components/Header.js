import React from 'react';
import {Link, browserHistory} from 'react-router';
import store from '../store';
import HeaderNav from './HeaderNav';

export default React.createClass({
  render() {
    return (
      <div className="header">
          <img className="header-logo" src='../../assets/images/tulipivylogo.jpg' onClick={this.NavigateHome}/>
        <HeaderNav />
      </div>
    );
  },

  NavigateHome() {
    browserHistory.push('/')
  }
});
