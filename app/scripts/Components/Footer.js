import React from 'react';
import FooterNav from './FooterNav';

export default React.createClass({
  render() {
    return (
      <div className="footer">
      <span> Follow Our Flowers </span>
      <FooterNav />
        <div className="copyright">
          <h5> 2016 Tulip & Ivy </h5>
        </div>
      </div>
    );
  }
});
