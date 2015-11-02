import React from 'react';
import photo from './details';


let photos = React.createClass( {

  selectHandler(id) {
    this.props.onImageSelect(id);
  },

  processPhotos(data) {
    console.log('process photo');
    return (
      <div key={data.objectId} 
        onImageSelect={() => this.selectHandler(data.objectId)}>
        <image src={data.photo} id={data.objectId} />
       </div>
    );

  },

  render() {
    return (

      <div className="images-view">
        <header>IG Mockup
        </header>

        <div className="profile">
          <div className="profile-image">
          </div>
          <div className="profile-info">
            <div className="profile-title">
              <h3>Lust List</h3>
              <a></a>
            </div>
            <div className="profile-snipit">
              <h3>Description</h3>
            </div>
            <div className="profile-follow">
              <h4>posts</h4>
              <h4>follower</h4>
              <h4>following</h4>
            </div>
          </div>
        </div>
        <div className="photo-list">
          {this.props.data.map(this.processPhotos) }
        </div>
        <div className="load-more"><h4>LOAD MORE</h4>
        </div>

        <footer>
          <ul>
            <li>ABOUT US</li>
            <li>SUPPORT</li>
            <li>BLOG</li>
            <li>PRESS</li>
            <li>API</li>
            <li>JOBS</li>
            <li>PRIVACY</li>
            <li>TERMS</li>
            <li>LANGUAGE</li>
          </ul>
          <div>2015 HopeCrichlow</div>
        </footer>
      </div>
    );
  }

});

export default photos;