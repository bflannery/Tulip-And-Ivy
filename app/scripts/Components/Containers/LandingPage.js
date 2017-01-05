import React from 'react';
import HeaderNav from '../HeaderNav';


export default React.createClass({
  render() {
    return (
      <div className="main-container">
      <div className="landing-page-container">
        <img className="landing-logo" src='../../assets/images/tulipivylogo.jpg'/>
      </div>
        <HeaderNav />
      </div>
    );
  }
});
