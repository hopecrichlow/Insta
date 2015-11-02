import React from 'react';

let add = React.createClass({

  addBackHandler() {
    this.props.onBackSelect();
  },

  addHandler() {
    this.props.onUploadSelect();
  },

  render() {

    return  (
      <div className="add">
        <h3>Add</h3>
        <form onSubmit={this.submitHandler}>
          <input type="file" text="Choose Photo" placeholder="Image URL:"></input>
        </form>
        <button onClick={() => this.addHandler()}>Add</button>
        <button onClick={() => this.addBackHandler()}>Back</button>

      </div>
    );
  }

});

export default add;