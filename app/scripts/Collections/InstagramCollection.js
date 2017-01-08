import Backbone from 'backbone';
import $ from 'jquery';
import Instagram from '../Models/instagramModel';
import {browserHistory} from 'react-router';
import _ from 'underscore';
import store from '../store';
import config from '../config';

export default Backbone.Collection.extend({
    model: Instagram,

    getPhotos() {
        let userid = 3975139653,
            num_photos = 8;

        $.ajax({
            url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
            dataType: 'jsonp',
            type: 'GET',
            data: {
                access_token: config.token,
                count: num_photos
            },
            success: (data) => {
              console.log(data)
            let posts = data.data;
            let postsInfo = posts.forEach((post, i, arr) => {
              this.add({
                image: post.images.standard_resolution,
                caption: post.caption.text,
                likes: post.likes.count,
                comments: post.comments.count
              });
            });
            },
            error: (instagram) => {
                console.log('NOPE'); // send the error notifications to console
            }
        });
    }
});
