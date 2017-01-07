import Backbone from 'backbone';
import $ from 'jquery';

export default Backbone.Model.extend({
  url: 'https://api.backendless.com/v1/data/Messages',
  idAttribute: 'objectId',
  defaults : {
    name: '',
    email: '',
    message: ''
  },

  saveMessage(name, email, message) {
    this.save({
      name: name,
      email: email,
      message: message
    }, {
      success: () => {
        console.log(name);
      },
      error: () => {
        console.log('failed');
      }
    });
  },

  sendMessage(name, email, message) {
    $.ajax({
          type: 'POST',
          url: 'https://api.backendless.com/v1/messaging/email',
          contentType: 'application/json',
          data: JSON.stringify({
            subject: 'Flower Message',
            bodyparts:{
              name: name,
              email: email,
              message: message,
            },
            to:['bflannery66@gmail.com']
          }),
          success:()=>{
              console.log('sent')
          }
      });

  }
  });
