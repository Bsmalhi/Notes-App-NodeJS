

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
        describe: 'Title of note',
        demand: true,
        alias: 't'
    };
const bodyOptions = {
        describe: 'Description of the note',
        demand: true,
        alias: 'b'
    };

const argv = yargs
.command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
})
.command('list', 'List all notes')
.command('read', 'Read a note',{
    title: titleOptions
})
.command('remove', 'Remove a note', {
    title: titleOptions
})
.help()
.argv;

var command = argv._[0];

if(command==='add'){
   var note = notes.addNote(argv.title, argv.body);
    
    if(note=== undefined){
        console.log(`Note ${argv.title} already exists!`);
    }else{
        console.log('Note ' + note.title + ' successfully created!');
    }

}else if(command==='list'){

   var allNotes =  notes.getAll() ;
    
   console.log(`printing ${allNotes.length} notes.`);
   allNotes.forEach((note) => {
          console.log(note.title,'-', note.body);
   });

}
else if(command==='remove'){
   var noteRemoved =  notes.removeNote(argv.title);
    var removedMessage = noteRemoved ? 'note ' + argv.title + ' successfull removed' : 'Note was not removed';
    console.log(removedMessage);
}else if(command==='read'){
    var note = notes.getNote(argv.title);
    if(note){
        console.log(note.title, note.body);
    }else{
        console.log('Note not found');
    }
}else {
    console.log('command not found');
}