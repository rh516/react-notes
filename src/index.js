import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import { Map } from 'immutable';
import Notes from './components/notes';
import CreateNote from './components/create';
import * as db from './services/datastore';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line new-cap
      notes: Map(),
    };
  }

  componentDidMount() {
    db.fetchNotes((notes) => {
      this.setState({
        // eslint-disable-next-line new-cap
        notes: Map(notes),
      });
    });
  }

  addNote = (note) => {
    db.addNote(note);
  }

  deleteNote = (noteID) => {
    db.deleteNote(noteID);
  }

  updateNote = (noteID, fields) => {
    db.updateNote(noteID, fields);
  }

  render() {
    return (
      <div>
        <CreateNote addNote={this.addNote} />
        <Notes
          notes={this.state.notes}
          deleteNote={this.deleteNote}
          updateNote={this.updateNote}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
