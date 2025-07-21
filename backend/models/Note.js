import mongoose from "mongoose";

// 1 Step: Define the schema for the Note model
// 2 Step: Create the model using the schema

const noteSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
}, { timeStamps: true }
);


const Note = mongoose.model("Note", noteSchema);

export default Note;