import React from 'react';
import Note from './note';

const Notes = (props) => {
  return (
    <div>
      {props.notes.entrySeq().map(([id, note]) => {
        return (
          <Note
            key={id}
            id={id}
            title={note.title}
            body={note.body}
            x={note.x}
            y={note.y}
            z={note.z}
            deleteNote={props.deleteNote}
          />
        );
      })}
    </div>
  );
};

export default Notes;
