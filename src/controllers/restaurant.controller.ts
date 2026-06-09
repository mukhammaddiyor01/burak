import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from '../models/Member.service';
import { AdminRequest, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import { LoginInput  } from "../libs/types/member";
import { Message } from "../libs/Errors";


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


        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;

        const result = await memberService.processSignup(newMember);
        // TODO: SESSIONS AUTHENTICATION

        req.session.member = result;
        req.session.save(function() {
            res.send(result);
        });


    } catch(err) {
        console.log("Error, processSignup:", err);
        res.send(err);
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup");
        res.render("signup");

    } catch(err) {
        console.log("Error, getSignUp:", err);
    }
};


restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin");
        res.render("login");
    } catch(err) {
        console.log("Error, Login:", err);
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
            res.send(result);
        });


    } catch (err) {
        console.log("Error, processLogin:", err);
        res.send(err);
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

export default restaurantController;
