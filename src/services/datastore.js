import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC2-YlUphvakdVw6bx-HuGwaG4w7BvtTyU',
  authDomain: 'react-notes-845a0.firebaseapp.com',
  databaseURL: 'https://react-notes-845a0-default-rtdb.firebaseio.com',
  projectId: 'react-notes-845a0',
  storageBucket: 'react-notes-845a0.appspot.com',
  messagingSenderId: '188276405043',
  appId: '1:188276405043:web:868f1313607f14fd9e4446',
  measurementId: 'G-GLN1L9WWJN',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

export function fetchNotes(callback) {
  db.ref('notes').on('value', (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
}

export function addNote(note) {
  db.ref('notes').push(note);
}

export function deleteNote(id) {
  db.ref('notes').child(id).remove();
}

export function updateNote(id, fields) {
  db.ref('notes').child(id).update(fields);
}
