import React from 'react';
import {
 PhotoModel,
 PhotoCollection
} from '../resources';


let car = React.createClass({

  clickHandler(event) {
    this.props.onSelect(this.props.id);

  },

  render(data) {
    return (
      
      <div className="photo" key={this.props.data.objectId} 
          onSelect={this.clickHandler}>
        <image src={this.props.data.photo}/>
        <div className="details">{this.props.data.details}
        </div>
        <div className="image-button">
          <button>Edit</button>
          <button>Back</button>
        </div>
      </div>
    );
  }

});

export default car;