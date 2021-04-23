import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import { Map } from 'immutable';
import Notes from './components/notes';
import CreateNote from './components/create';

let id = 1;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line new-cap
      notes: Map(),
    };
  }

  addNote = (note) => {
    this.setState((prevState) => ({
      notes: prevState.notes.set(id, note),
    }));
    id += 1;
  }

  render() {
    return (
      <div>
        <CreateNote addNote={this.addNote} />
        <Notes notes={this.state.notes} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
