import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import {connectDB} from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

// Middleware to parse JSON requests

app.use(express.json());
app.use("/api/notes", notesRoutes)


app.listen(PORT, () => {
    console.log('Server is running on port ', PORT);
})