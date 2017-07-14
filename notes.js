var fs = require('fs');
var fetchNote = ()=>{
    try{
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
    }catch(e){
        return [];
    }
};

var saveNote = (notes)=>{
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body)=>{
    var notes = fetchNote();
    var note={
        title,
        body
    };
    var duplicateNotes = notes.filter((note)=> note.title === title);

    if(duplicateNotes.length ===0){
    notes.push(note);
       saveNote(notes);
       return note;
    }

};

var getAll = ()=>{
    return fetchNote();
};

var getNote = (title)=>{
    var notes = fetchNote();
    var ar = notes.filter((note) => note.title === title);
    debugger;
    return ar[0];
}

var removeNote = (title)=>{
    var notes = fetchNote();
    var ar = notes.filter((note) => note.title != title);
    saveNote(ar);
    return notes.length != ar.length;
}


module.exports = {
    addNote: addNote,
    getAll: getAll,
    getNote: getNote,
    removeNote: removeNote
};


