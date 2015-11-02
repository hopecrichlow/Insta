import React from 'react';

let car = React.createClass({

  clickHandler(event) {
    this.props.onSelect(this.props.id);

  },

  render(data) {
    return (
      
      <div className="photo" key={this.props.photo.objectId} 
          onSelect={this.clickHandler}>
        <image src={this.props.data.photo}/>
        <div className="details">{this.data.details}
        </div>
        <button>Edit</button>
        <button>Back</button>
      </div>
    );
  }

});

export default car;