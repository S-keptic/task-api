import express from 'express'
import connectDb from './db/connectDb.js';
import task from './routes/task.js';
import dotenv from 'dotenv';
dotenv.config();
const app  = express()

const DATABASE_URL = process.env.DATABASE_URL;
const port = process.env.PORT;





app.use(express.json())

app.use('/',task)

connectDb(DATABASE_URL)
app.listen(port,()=>{
    console.log("server up on port 3000")
})
