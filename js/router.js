import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

//Index contains both model and collecton
import {PhotoCollection} from './resources';

import {
  Photos as HomeView, 
  Car as DetailsView,
  Edit as EditView, 
  Add as AddView,
  Spinner
} from './views';


// Create Router
export default Backbone.Router.extend( {

  // Create routes
  routes: {
    ""          : "redirectToPhotos",
    "photos"    : "showPhotos",
    "photo/:id" : "showDetails", 
    "add"       : "showAdd",
    "edit/:id"  : "showEdit"
  },

  // Initialize//
  initialize(appElement) {
    this.el     = appElement;
    this.photos = new PhotoCollection();
  },

  goto(route) {
    this.navigate(route, {
      trigger: true
    });
  },

  render(component) {
    ReactDom.render(component, this.el);
  },

  // Home View //
  showPhotos() {
    console.log(this, 'show photos page');
    this.photos.fetch().then(() => {
      this.render(
        <HomeView
          onImageSelect={(id) => this.goto('photo/' + id)}
          data={ this.photos.toJSON()}/>
      );
    });
  },


  showDetails(id) {
    console.log('show details page', this);
    let pht = this.photos.get(id);

    if (pht) {
      this.render(
        <HomeView
          onBackClick={() => this.goto('')}
          onEditClick={(id) => this.goto('edit/' + id)}
          data={pht.toJSON()}/>
      );
      
    } else {
      pht = this.photos.add({objectId: id});
      pht.fetch().then(() => {
        this.render(
          <DetailsView
            onBackClick={() => this.goto('')}
            onEditClick={(id) => this.goto('edit/' + id)}
            data={pht.toJSON()}/>
        );
      });
    }
  },

 
  showEdit(id) {
    console.log('show edit page');

    this.render( 
      <EditView
      onBackSelect={() => this.goto('')}
      // On
      onEditSelect={() => {
        let newEdit = new PhotoModel ({
          Photo: newPhoto
        });
        newEdit.save();
        this.goto('');
      }
    }/>

    );

  }, 
      
  showAdd() {
    console.log('show add page');

    this.render(
      <AddView
      onBackSelect={() => this.goto('')}
      // On upload create new image model and save
      onUploadSelect={() => {
      
        let newUpload = new PhotoModel ({
          Photo: newPhoto
        });
        newUpload.save();
        this.goto('');
      }
      }/>

    );

  },



  // Spinner //
  showSpinner() {
    this.render(
      <Spinner/>
    );

  },

  // Redirect //
  redirectToPhotos() {
    this.navigate('photos', {
      replace: true,
      trigger: true
    });

  },


  // Start Router
  start() {
    Backbone.history.start();
    return this;

  },


});