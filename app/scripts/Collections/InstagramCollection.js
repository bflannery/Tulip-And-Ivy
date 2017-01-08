import Backbone from 'backbone';
import $ from 'jquery';
import Instagram from '../Models/instagramModel';
import {browserHistory} from 'react-router';
import store from '../store';

export default Backbone.Collection.extend({
    model: Instagram,

    getPhotos() {

        let token = '187682349.670ba2b.926dbe5ab0a340b98d940e59a9a09b79',
            userid = 187682349,
            num_photos = 4;

        $.ajax({
            url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
            dataType: 'jsonp',
            type: 'GET',
            data: {
                access_token: token,
                count: num_photos
            },
            success: (instagram) => {
              console.log(instagram.data)
            },
            error: (instagram) => {
                console.log('NOPE'); // send the error notifications to console
            }
        });
    }
});
