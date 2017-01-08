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
	data: {access_token: token, count: num_photos},
	success: function(data){
 		console.log(data);
		for( x in data.data ){
			$('ul').append('<li><img src="'+data.data[x].images.low_resolution.url+'"></li>'); // data.data[x].images.low_resolution.url - URL of image, 306х306
			// data.data[x].images.thumbnail.url - URL of image 150х150
			// data.data[x].images.standard_resolution.url - URL of image 612х612
			// data.data[x].link - Instagram post URL
		}
	},
	error: function(data){
		console.log(data); // send the error notifications to console
	}
});
}
});


// access_token=
