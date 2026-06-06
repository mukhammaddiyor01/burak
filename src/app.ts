import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

/** 1-ENTRANCE **/
const app = express();
console.log("__dirname:", __dirname);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));

/** 2-Sessions **/


/** 3-Views **/
app.set ("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


/** 4-Routers **/

app.use("/admin", routerAdmin); //BSSR: Backend server site rendering : EJS
app.use("/", router);    // Middleware Design Pattern // Bu requestni router.ts ga jo'natadi
                         // SPA: React

export default app;
