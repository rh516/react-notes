import React, { Component } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

export default class CreateNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  }

  handleBodyChange = (event) => {
    this.setState({ body: event.target.value });
  }

  handleSubmit = (event) => {
    const note = {
      title: this.state.title,
      body: this.state.body,
      x: 0,
      y: 0,
    };

    this.props.addNote(note);
    this.setState({
      title: '',
      body: '',
    });
  }

  render() {
    return (
      <div id="create-note-container">
        <TextareaAutosize
          id="title-container"
          placeholder="Title"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <TextareaAutosize
          id="body-container"
          placeholder="Body"
          value={this.state.body}
          onChange={this.handleBodyChange}
        />
        <input
          id="submit-button"
          type="submit"
          value="Create"
          onClick={this.handleSubmit}
        />
      </div>
    );
  }
}
