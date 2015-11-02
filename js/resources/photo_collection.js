import Backbone from 'backbone';
import PhotoModel from './photo_model';
import {APP_URL} from '../parse_data';


let PhotoCollection = Backbone.Collection.extend( {

  url: APP_URL,

  model: PhotoModel,

  parse(data) {
    return data.results;
  }

});

export default PhotoCollection;