import React from 'react';
import {
 PhotoModel,
 PhotoCollection
} from '../resources';


let car = React.createClass({

  clickHandler(event) {
    this.props.onSelect(this.props.id);
  },

  editHandler(id) {
    this.props.onEditSelect(id);
  },

  addHandler() {
    this.props.onAddSelect();
  },

  backHandler() {
    this.props.onBackSelect();
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
          <button>Add</button>
        </div>
      </div>
    );
  }

});

export default car;