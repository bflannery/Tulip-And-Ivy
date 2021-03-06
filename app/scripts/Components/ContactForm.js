import React from 'react';
import store from '../store';
export default React.createClass({
  render() {

    return (

        <form onSubmit={this.handleSubmit} className="contact-form">
          <input type='text'  ref="name" placeholder='Name' />
          <input type='email'  ref="email" placeholder='Email' />
          <textarea type='text'  ref="message" placeholder='Message' rows='15' cols='75'/>
          <input type='submit' value='Send Message'/>
        </form>
      );
  },

  handleSubmit(e) {
    e.preventDefault();
    const name = this.refs.name.value;
    const email= this.refs.email.value;
    const message= this.refs.message.value;

    store.message.saveMessage(name, email, message);
    store.message.sendMessage(name, email, message);

    this.refs.name.value = '';
    this.refs.email.value = '';
    this.refs.message.value = '';
  }
});
