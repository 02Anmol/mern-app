import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimier.js';
import cors from 'cors';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

//middleware
app.use(cors({
    origin: "http://localhost:5173", // Adjust this to your frontend URL
})
);
app.use(express.json()); // Middleware to parse JSON requests
app.use(rateLimiter)



//our simple middleware
// app.use((req,res,next)=>{
//     console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
//     next();
// })

app.use("/api/notes", notesRoutes)


app.listen(PORT, () => {
    console.log('Server is running on port ', PORT);
})