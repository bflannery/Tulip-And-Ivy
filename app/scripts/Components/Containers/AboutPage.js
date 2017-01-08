import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import store from '../../store';

export default React.createClass({

  getInitialState() {
    return {
      instagram: {
        photos: []
    }
  };
  },

  componentDidMount() {
    store.instagrams.getPhotos();

  },


  render() {
    console.log(this.state)
    return (
      <div className="about-page">
      <Header />
      <div  className="about">
      <div className="about-container">
        <h3> Hi! Im Sophie! </h3>
        <span> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
        </div>
        <img className="avatar" src='../../assets/images/sophie.jpg'/>
        </div>
      <Footer />
      </div>
    );
  }
});
