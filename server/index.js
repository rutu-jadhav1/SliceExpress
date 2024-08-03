import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config();

import { getPizzas } from './controllers/pizza.js';
import { getHealth } from './controllers/health.js';
import { handlePageNotFound } from './controllers/errors.js';

const app = express();
app.use(express.json());
app.use(cors())

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URL)
    if(conn){
        console.log(`✅ MongoDB Connected Successfully 📦`)
    }
}
connectDB();

app.get("/health", getHealth)

app.get("/pizzas", getPizzas)

app.use("*", handlePageNotFound)

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
})