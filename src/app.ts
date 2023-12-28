import express from "express";
import bodyParser from "body-parser";
import routes from "./routes"
import { currencyConvert } from "./converter";
require('dotenv').config();
const app=express()
const PORT=process.env.PORT;
app.use(bodyParser.json())

app.use('/',routes)

app.listen(PORT,()=>{
    console.log("Server is Running")
})