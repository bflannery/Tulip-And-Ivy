import React from 'react';
import {Link} from 'react-router';
import store from '../store';

export default React.createClass({
  render() {
    return (
    <ul className="nav-container">
      <li className="nav-list">
        <Link to="/about"> About </Link>
      </li>
      <li className="nav-list">
        <Link to="/gallery"> Gallery </Link>
      </li>
      <li className="nav-list">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
    );
  }
});
