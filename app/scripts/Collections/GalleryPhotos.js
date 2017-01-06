import Backbone from 'backbone';
import store from '../store';
import galleryPhoto from '../Models/galleryPhotoModel';

export default Backbone.Collection.extend({
  model: galleryPhoto,
  url: 'https://api.backendless.com/v1/files/GalleryPhotos',

  parse(photos) {
    console.log(photos.data);
    return photos.data
  }
});
