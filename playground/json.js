// var obj = {
//     name: 'Baljot'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString= `
//   { "name": "Baljot", "age": 22
// }`;
// var person = JSON.parse(personString);
// console.log( typeof personString);
// console.log(person);

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'body'
};
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('Notes.json', originalNoteString);

var noteString = fs.readFileSync('Notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);