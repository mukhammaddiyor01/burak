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
        // send | json | redirect | end | render
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
        res.send("Sign Up Page");
    } catch(err) {
        console.log("Error, getSignUp:", err);
    }
};

restaurantController.processLogin = (req: Request, res: Response) => {
    try {
        console.log("processLogin");
        res.send("DONE");
    } catch(err) {
        console.log("Error, processLogin:", err);
    }
};

restaurantController.processSignup = (req: Request, res: Response) => {
    try {
        console.log("processSignup");
        res.send("DONE");
    } catch(err) {
        console.log("Error, processSignup:", err);
    }
};

export default restaurantController;