import express, {Request, Response} from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";
// default chaqirilganda yaxlit chaqiriladi


router.post("/login", memberController.login);

router.post("/signup", memberController.signup);




// router.get('/', memberController.goHome);

// router.get("/login", memberController.getLogin);

// router.get("/signup", memberController.getSignup);

export default router;
