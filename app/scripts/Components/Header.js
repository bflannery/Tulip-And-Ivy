import React from 'react';
import {Link} from 'react-router';
import store from '../store';
import HeaderNav from './HeaderNav';

export default React.createClass({
  render() {
    return (
      <div className="header">
        <Link to = "/">
        <h1 className="app-title">Tulip & Ivy</h1>
        </Link>
        <HeaderNav />
        <div className="hero">
        </div>
      </div>
    );
  }
});
