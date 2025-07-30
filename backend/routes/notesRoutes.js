import express from 'express';
import { createNote, deleteNotes, getAllNotes, getNoteById, updateNotes } from '../controllers/notesControllers.js';


const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNotes);
router.delete("/:id", deleteNotes);


//What is Endpoint?
// An endpoint is a combination of a URL + HTTP methods that lets the client intreact with a specific reason.


export default router;