import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
     try {
          const notes = await Note.find({});
          res.status(200).json(notes);
     } catch (error) {
          console.log(`Error getAllNotes notes: ${error.message}`);
          res.status(500).json({ message: "Internal Server Error", error: error.message });
     }
};

export async function createNote(req, res){
     try {
          const { title, content } = req.body;
          const newNote = new Note({title, content});
          const savedNote = await newNote.save();
          res.status(201).json(savedNote);
     } catch (error) {
          console.log(`Error in createNote: ${error.message}`);
          res.status(500).json({ message: "Internal Server Error", error: error.message });
     }
}

export async function updateNotes(req, res){
     res.status(201).json({ mesage: "notes created successfully" })
}

export async function deleteNotes(req, res){
    res.status(200).json({ message: "Updtaed successfully" })
}