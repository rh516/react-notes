import React, { Component } from 'react';
import Draggable from 'react-draggable';
import TextareaAutosize from 'react-textarea-autosize';
import ReactMarkdown from 'react-markdown';

export default class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      body: this.props.body,
      isEditing: false,
    };
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  }

  handleBodyChange = (event) => {
    this.setState({ body: event.target.value });
  }

  handleEditSubmit = () => {
    this.setState({ isEditing: false });

    this.props.updateNote(this.props.id, {
      title: this.state.title,
      body: this.state.body,
    });
  }

  handleEditClick = () => {
    this.setState({ isEditing: true });
  }

  handleDeleteClick = () => {
    this.props.deleteNote(this.props.id);
  }

  handleDrag = (event, data) => {
    this.props.updateNote(this.props.id, {
      x: Math.max(0, data.x),
      y: Math.max(0, data.y),
    });
  }

  renderSomeSection = () => {
    if (this.state.isEditing) {
      return (
        <div className="editing-container">
          <div className="edit-title-container">
            <TextareaAutosize value={this.state.title} onChange={this.handleTitleChange} />
          </div>
          <div className="edit-body-container">
            <TextareaAutosize value={this.state.body} onChange={this.handleBodyChange} />
          </div>
          <div className="edit-submit-container">
            <button type="button" onClick={this.handleEditSubmit}>
              Done!
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="note-content-container">
          <h2>{this.props.title}</h2>
          <div className="note-body-container">
            <ReactMarkdown>{this.props.body || ''}</ReactMarkdown>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <Draggable
        handle=".handle"
        grid={[5, 5]}
        defaultPosition={{ x: 0, y: 0 }}
        position={{ x: this.props.x, y: this.props.y }}
        onDrag={this.handleDrag}
      >
        <div className="note-container">
          <div className="note-buttons-container">
            <button
              className="delete-button"
              type="button"
              onClick={this.handleDeleteClick}
            >
              <i className="fas fa-trash-alt" />
            </button>
            <button
              className="edit-button"
              type="button"
              onClick={this.handleEditClick}
            >
              <i className="fas fa-edit" />
            </button>
            <button
              className="handle"
              type="button"
            >
              <i className="fas fa-arrows-alt" />
            </button>
          </div>
          {this.renderSomeSection()}
        </div>
      </Draggable>
    );
  }
}
