import React from 'react';
import Note from './note';

const Notes = (props) => {
  return (
    <div>
      {props.notes.entrySeq().map(([id, note]) => {
        return (
          <Note
            key={id}
            title={note.title}
            body={note.body}
          />
        );
      })}
    </div>
  );
};

export default Notes;
