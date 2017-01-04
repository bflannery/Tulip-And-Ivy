import React from 'react';
import {Link} from 'react-router';
import store from '../store';

export default React.createClass({
  render() {
    return (
    <ul className="nav-container">
      <li className="nav-list">About</li>
      <li className="nav-list">Design</li>
      <li className="nav-list">Photography</li>
      <li className="nav-list">Contact</li>
    </ul>
    );
  }
});
