import React, { Component } from 'react';

class Todos extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12 col-sm-4">
          <p>Todo</p>
        </div>
        <div className="col-12 col-sm-2">
          <p>DueDate</p>
        </div>
        <div className="col-12 col-sm-4">
          <button className="btn btn-primary">Mark Complete</button>
        </div>
        <div className="col-12 col-sm-2">
          <button className="btn btn-danger" >Delete</button>
        </div >
      </div >
    );
  }
}

export default Todos;