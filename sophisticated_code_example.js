/**
 * filename: sophisticated_code_example.js
 * This code demonstrates a sophisticated and complex JavaScript program
 * that allows users to create, edit, and save notes with various features.
 */

// Note class to represent an individual note
class Note {
  constructor(title, content, tags) {
    this.title = title;
    this.content = content;
    this.tags = tags;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  updateContent(newContent) {
    this.content = newContent;
    this.updatedAt = new Date();
  }

  addTags(newTags) {
    this.tags.push(...newTags);
    this.updatedAt = new Date();
  }
}

// NotesApp class that manages all the notes
class NotesApp {
  constructor() {
    this.notes = [];
  }

  createNote(title, content, tags) {
    const note = new Note(title, content, tags);
    this.notes.push(note);
  }

  editNoteContent(index, newContent) {
    if (index >= 0 && index < this.notes.length) {
      this.notes[index].updateContent(newContent);
    }
  }

  addTagsToNote(index, newTags) {
    if (index >= 0 && index < this.notes.length) {
      this.notes[index].addTags(newTags);
    }
  }

  displayNotes() {
    console.log("----Notes----");
    this.notes.forEach((note, index) => {
      console.log(`Note ${index + 1}: ${note.title}`);
      console.log(`Content: ${note.content}`);
      console.log(`Tags: ${note.tags.join(", ")}`);
      console.log(`Created At: ${note.createdAt}`);
      console.log(`Last Updated At: ${note.updatedAt}`);
      console.log("-----------------");
    });
  }
}

// Create a sample NotesApp and test its functionalities
const notesApp = new NotesApp();

notesApp.createNote(
  "JavaScript Basics",
  "JavaScript is a powerful programming language used for web development.",
  ["javascript", "web"]
);
notesApp.createNote(
  "Object-Oriented Programming",
  "OOP is a programming paradigm based on the concept of objects.",
  ["programming", "OOP"]
);
notesApp.createNote(
  "Design Patterns",
  "Design patterns are reusable solutions to common problems in software design.",
  ["programming", "design patterns"]
);

notesApp.displayNotes();

notesApp.editNoteContent(1, "OOP is a powerful concept in programming.");
notesApp.addTagsToNote(2, ["software engineering"]);

notesApp.displayNotes();

// ... Add more complex operations and features to enhance the program ...

// End of sophisticated_code_example.js