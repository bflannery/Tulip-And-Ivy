import React from 'react';
import {Link} from 'react-router';
import store from '../store';

export default React.createClass({
  render() {
    return (
    <ul className="landing-nav-container">
      <li className="landing-nav-list">
        <Link to="/about"> About </Link>
      </li>
      <li className="landing-nav-list">
        <Link to="/gallery"> Gallery </Link>
      </li>
      <li className="landing-nav-list">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
    );
  }
});
