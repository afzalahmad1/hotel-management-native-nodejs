// const mongoose = require("mongoose");
import mongoose from "mongoose";
// require("dotenv").config();
import dotenv from "dotenv";
dotenv.config();
let URI: any = process.env.MONGODB_URI;

   const connect = ()=>{
    console.log("Mongodb connected");
    return mongoose
    .connect(URI, {
       "dbName": "hotel-management"
    })
  }
export default connect;