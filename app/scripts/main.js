import React from 'react';
import ReactDom from 'react-dom';
import router from './router';
import $ from 'jquery';
import config from './config';



let appContainer = document.getElementById('app-container');

let container = document.getElementById('container');
$(document).ajaxSend((evt, xhr, opts) => {
    if (opts.url.includes('backendless') > -1) {
        console.log(opts.type);

        xhr.setRequestHeader('application-id', config.appId);
        xhr.setRequestHeader('secret-key', config.secretKey);
        xhr.setRequestHeader('application-type', 'REST');
        xhr.setRequestHeader('user-token', window.localStorage.getItem('user-token'));
      } else if(opts.url.indexOf('api.instagram.com') > -1) {
        
      }
  });


ReactDom.render(router, appContainer);
