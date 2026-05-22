// Architectual pattern(backend suyagi): MVC(model view controller), DI(dependency Injection), MVP(model vieew presenter)
// MVC = (model view controller)
// DI = (dependency Injection)
// MVP = (model vieew presenter)

// Design pattern(backend malum bir bo'lagi): Middleware, Decotar
// 3 xil turga bo'linar ekan:
// Creational
// Structural
// Behavioral design patterns

// import moment from 'moment';   //  const moment = require('moment')

import dotenv from 'dotenv';
dotenv.config();

// console.log("PORT:", process.env.PORT);

// console.log("mongo_url:", process.env.MONGO_URL);

// CLUSTER => Database => Collection => Document
import mongoose from "mongoose";

mongoose
    .connect(process.env.MONGO_URL as string, {})
    .then((data) => {
        console.log("MongoDB connection succeed");
        const PORT = process.env.PORT ?? 3003;
    })
    .catch((err) => console.log("Error on Connection MongoDB", err));