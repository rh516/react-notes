import React, { Component } from 'react';
import Draggable from 'react-draggable';

export default class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      body: this.props.body,
      x: this.props.x,
      y: this.props.y,
    };
  }

  handleDeleteClick = () => {
    this.props.deleteNote(this.props.id);
  }

  handleDrag = (event, data) => {
    this.setState({
      x: data.x,
      y: data.y,
    });
  }

  render() {
    return (
      <Draggable
        handle=".handle"
        grid={[5, 5]}
        defaultPosition={{ x: 0, y: 0 }}
        position={{ x: this.state.x, y: this.state.y }}
        onDrag={this.handleDrag}
      >
        <div className="handle">
          <button
            className="delete-button"
            type="button"
            onClick={this.handleDeleteClick}
          >
            <i className="fas fa-trash-alt" />
          </button>
          <h3>{this.state.title}</h3>
          <p>{this.state.body}</p>
        </div>
      </Draggable>
    );
  }
}
