import React from 'react';
import Header from '../Header';
import ContactForm from '../ContactForm';
import Footer from '../Footer';

export default React.createClass({
  render() {
    return (
      <div className="contact-page">
        <Header />
        <div className="form-container">
          <h2> Need Flowers For Your Next Event? </h2>
          <h4> Feel Free To Reach Out For Your Flower Needs! </h4>
          <ContactForm />
        </div>
        <Footer />
      </div>
    );
  }
});
