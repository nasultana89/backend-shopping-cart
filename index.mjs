//  Imports  
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from './db/conn.mjs'



const app = express();



// Load environment variables
dotenv.config();



// Middleware to parse JSON requests
// app.use(express.json());

// Connect to MongoDB
connectDB();

// Define a test route
app.get('/', (req, res) => res.send('API is running...'));



// Set the server to listen on a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));