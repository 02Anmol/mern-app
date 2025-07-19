export const getAllNotes = (req, res) => {
     res.status(200).send("You fetched 5 notes")
};

export const createNote = (req, res) => {
     res.status(200).send("You posted 5 notes")
}

export const updateNotes = (req, res) => {
     res.status(201).json({ mesage: "notes created successfully" })
}

export const deleteNotes = (req, res) => {
    res.status(200).json({ message: "Updtaed successfully" })
}