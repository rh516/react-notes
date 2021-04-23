import React, { Component } from 'react';

export default class Note extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      body: this.props.body,
    };
  }

  render() {
    return (
      <div>
        <h3>{this.state.title}</h3>
        <p>{this.state.body}</p>
      </div>
    );
  }
}
