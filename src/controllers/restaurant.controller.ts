import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from '../models/Member.service';



const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome");
        // LOGIC
        // SERVICE MODEL
        // ...
        res.send("Home Page");
    } catch(err) {
        console.log("Error, goHome:", err);
    }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin");
        res.send("Login Page");
    } catch(err) {
        console.log("Error, Login:", err);
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup");
        res.send("Sign up Page");
    } catch(err) {
        console.log("Error, getSignUp:", err);
    }
};

export default restaurantController;