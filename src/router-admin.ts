import express, {Request, Response} from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";
// default chaqirilganda yaxlit chaqiriladi


/** Restaurant */
routerAdmin.get('/', restaurantController.goHome);

routerAdmin
    .get("/login", restaurantController.getLogin)
    .post("/login", restaurantController.processLogin);

routerAdmin
    .get("/signup", restaurantController.getSignup)
    .post("/signup", 
        makeUploader("members").single("memberImage"), 
        restaurantController.processSignup);

routerAdmin.get("/logout", restaurantController.logout);

routerAdmin.get("/check-me", restaurantController.checkAuthSession);

/** Restaurant Product */
routerAdmin.get(
    "/product/all", 
    restaurantController.verifyRestaurant,
    productController.getAllProducts
);
routerAdmin.post("/product/create", 
    restaurantController.verifyRestaurant, // middleware
    // uploadProductImage.single('productImage'),
    makeUploader("products").array ("productImage", 5),
    productController.createNewProduct);
routerAdmin.post("/product/:id/:id2", 
    restaurantController.verifyRestaurant,
    productController.updateChosenProduct);

/** Restaurant User */

export default routerAdmin;
