import express, {Request, Response} from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";
// default chaqirilganda yaxlit chaqiriladi


/** Restaurant */
routerAdmin.get('/', restaurantController.goHome);

routerAdmin
    .get("/login", restaurantController.getLogin)
    .post("/login", restaurantController.processLogin);

routerAdmin
    .get("/signup", restaurantController.getSignup)
    .post("/signup", restaurantController.processSignup);

/** Restaurant Product */

/** Restaurant User */

export default routerAdmin;