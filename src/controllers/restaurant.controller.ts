import { NextFunction, Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from '../models/Member.service';
import { AdminRequest, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import { LoginInput  } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Errors";



const memberService = new MemberService();

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome");
        // LOGIC
        // SERVICE MODEL
        // ...
        res.render("home");
        // send | json | redirect | end | render
    } catch(err) {
        console.log("Error, goHome:", err);
    }
};

restaurantController.processSignup = async (req: AdminRequest, res: Response) => {
    try {
        console.log("processSignup");
        const file = req.file;
        // console.log("file:", file);
        // throw new Error("Forced Quit"); 
        if(!file) 
            throw new Errors(HttpCode.BAD_REQUEST, Message.SOMETHING_WENT_WRONG);


        const newMember: MemberInput = req.body;
        newMember.memberImage = file?.path;
        newMember.memberType = MemberType.RESTAURANT;
        const result = await memberService.processSignup(newMember);
        // TODO: SESSIONS AUTHENTICATION

        req.session.member = result;
        req.session.save(function() {
            res.redirect("/admin/product/all");
        });


    } catch(err) {
        console.log("Error, processSignup:", err);
        const message = 
            err instanceof Error ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script> alert("${message}"); windows.location.replace('admin/signup') </script>`);
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup");
        res.render("signup");

    } catch(err) {
        console.log("Error, getSignUp:", err);
        res.redirect("/admin");
    }
};


restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin");
        res.render("login");
    } catch(err) {
        console.log("Error, Login:", err);
        res.redirect("/admin");
    }
};



restaurantController.processLogin = async (req: AdminRequest, res: Response) => {
    try {
        console.log("processLogin");
        console.log("body:", req.body);
        const input: LoginInput = req.body;

        const result = await memberService.processLogin(input);
        // TODO: SESSIONS AUTHENTICATION

          req.session.member = result;
        req.session.save(function() {
         res.redirect("/admin/product/all");
        });


    } catch (err) {
        console.log("Error, processLogin:", err);
        const message = 
            err instanceof Error ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(`<script> alert("${message}"); windows.location.replace('admin/login') </script>`);
    }
};


restaurantController.logout = async (
    req: AdminRequest, 
    res: Response
) => {
    try {
        console.log("processlogout");
        req.session.destroy(function() {
            res.redirect("/admin")   // redirect() bizni linkga yuboradi
        });
    } catch (err) {
        console.log("Error, processLogin:", err);
        res.redirect("/admin");
    }
};


restaurantController.checkAuthSession = async (
    req: AdminRequest, 
    res: Response
) => {
    try {
        console.log("checkAuthSessionprocessLogin");
        if(req.session?.member) res.send(`<script> alert("${req.session.member.memberNick }") </script>`);
        else  res.send(`<script> alert("${Message.NOT_AUTHENTICATED}") </script>`);
    } catch (err) {
        console.log("Error, checkAuthSession", err);
        res.send(err);
    }
};

restaurantController.verifyRestaurant = (
    req: AdminRequest,
    res: Response,
    next: NextFunction
) => {
    if(req.session?.member?.memberType === MemberType.RESTAURANT) {
        req.member = req.session.member;
        next();
    } else {
        const message = Message.NOT_AUTHENTICATED;
        res.send(
            `<script> alert("${message}"); window.location.replace('/admin/login'); </script>`
        );
    }
};

export default restaurantController;
