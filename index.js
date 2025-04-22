import {config} from "dotenv";
import express from "express";
import{connectDB} from "./config/db.js"
import bookRouter from ".routes/book.js"

const app=express();

config()
app.use(express.json())
connectDB();

app.use("/api/users",bookRouter);
let port=process.env.port
app.listen(port,()=> console.log(`app is on port:${port}`))

