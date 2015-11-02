import React from 'react';

let edit = React.createClass({

  addBackHandler() {
    this.props.onBackSelect();
  },

  editHandler() {
    this.props.onEditSelect();
  },

  render() {

    return (
      <div className="edit">
        <h3>Edit</h3>
        <form onSubmit={this.submitHandler}>
          <label onChange={this.updateMessage} type="file"/>
        </form>
        <button onClick={() => this.editHandler()}>Edit</button>
        <button onClick={() => this.addBackHandler()}>Back</button>

      </div>

    );
  }
});

export default edit;