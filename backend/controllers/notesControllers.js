import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
     try {
          const notes = await Note.find({});
          res.status(200).json(notes);
     } catch (error) {
          console.log(`Error in getAllNotes : ${error.message}`);
          res.status(500).json({ message: "Internal Server Error", error: error.message });
     }
};


export async function getNoteById(req, res) {
     try {
          const note = await Note.findById(req.params.id);
          if (!note) {
               return res.status(404).json({ message: "Note not found" });
          }
          res.status(200).json(note);
     } catch (error) {
          console.log(`Error in getNoteById : ${error.message}`);
          res.status(500).json({ message: "Internal Server Error", error: error.message });
     }
}

export async function createNote(req, res) {
     try {
          const { title, content } = req.body;
          const newNote = new Note({ title, content });
          const savedNote = await newNote.save();
          res.status(201).json(savedNote);
     } catch (error) {
          console.log(`Error in createNote: ${error.message}`);
          res.status(500).json({ message: "Internal Server Error", error: error.message });
     }
}

export async function updateNotes(req, res) {
     try {
          const { title, content } = req.body
          const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content },
               {new: true},
          );
          if (!updatedNote) {
               return res.status(404).json({ message: "Note not found" });
          }
          res.status(200).json(updatedNote);
     } catch (error) {
          console.log(`Error in updateNote: ${error.message}`);
          res.status(500).json({ message: "Internal Server Error", error: error.mesage });
     }
}

export async function deleteNotes(req, res) {
     try {
          const deletedNote = await Note.findByIdAndDelete(req.params.id);
          if (!deletedNote) {
               return res.status(404).json({ message: "Note not found" });
          }
          res.status(200).json({ message: "Note deleted successfully" });
     } catch (error) {
          console.log(`Error in deleteNote: ${error.message}`);
          res.status(500).json({ message: "Internal Server Error", error: error.mesage });
     }
}