import { T } from '../libs/types/common'
import { NextFunction, Request, Response } from 'express'
import { ExtendedRequest, LoginInput, Member, MemberInput, MemberUpdateInput } from '../libs/types/member';
import { MemberType } from '../libs/enums/member.enum';
import MemberService from '../models/Member.service';
import Errors, { HttpCode, Message } from '../libs/Errors';
import { randomBytes } from 'crypto';
import AuthService from '../models/Auth.service';
import { AUTH_TIMER } from '../libs/config';

// SPA - REACT uchun 

const memberController: T = {};

const memberService = new MemberService();
const authService = new AuthService();

const createMemberToken = (): string => randomBytes(48).toString('hex');

memberController.signup = async (req: Request, res: Response) => {
    try {
        console.log("signup");
        console.log("body:", req.body);

        const input: MemberInput = req.body,
            result: Member = await memberService.signup(input);

        // TODO: TOKENS AUTHENTICATION
        const token = await authService.createToken(result);

        // TODO: TOKEN Cookie ga joylash
        res.cookie("accessToken", token, {
            maxAge: AUTH_TIMER * 3600 * 1000,
            httpOnly: false,
        });

        res.status(HttpCode.CREATED).json({ member: result, accessToken: token });
    } catch (err) {
        console.log("ERROR, signup:", err)
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
        // res.json({})
    }
    
};

memberController.login = async (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    try {
        console.log("login");
        console.log("body:", req.body);

        const input: LoginInput = req.body,
            result = await memberService.login(input),

            // TODO: TOKENS AUTHENTICATION
            token = await authService.createToken(result);

        // TODO: TOKEN Cookie ga joylash
        res.cookie("accessToken", token, {
            maxAge: AUTH_TIMER * 3600 * 1000,
            httpOnly: false,
        });

        res.status(HttpCode.OK).json({ member: result, accessToken: token });
    } catch (err) {
        console.log("ERROR, login:", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
        // res.json({});
    }
};

memberController.logout = (req: ExtendedRequest, res: Response) => {
    try {
        console.log("logout");
        res.cookie("accessToken", null, { maxAge: 0, httpOnly: true });
        res.status(HttpCode. OK).json({ logout: true });
    } catch (err) {
        console.log("ERROR, login:", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};

memberController.getMemberDetail = async (
    req: ExtendedRequest, 
    res: Response
) => {
    try {
        console.log("getMemberDetail");
        const result = await memberService.getMemberDetail(req.member);

        res.status(HttpCode.OK).json(result);
    } catch (err) {
        console.log("ERROR, getMemberDetail:", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};

memberController.updateMember = async (
    req: ExtendedRequest, 
    res: Response
) => {
    try {
        console.log("updateMember");
        const input: MemberUpdateInput = req.body;
        if(req.file) input.memberImage = req.file.path.replace(/\\/, "/");
        const result = await memberService.updateMember(req.member, input);

        res.status(HttpCode.OK).json(result);
    } catch (err) {
        console.log("ERROR, updateMember:", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
}

memberController.verifyAuth = async (
    req: ExtendedRequest, 
    res: Response, 
    next: NextFunction
) => {
    try {
        const token = req.cookies["accessToken"];
        if (token) req.member = await authService.checkAuth(token);

        if (!req.member) 
            throw new Errors(HttpCode.UNAUTHORIZED, Message.NOT_AUTHENTICATED);

        next();
    } catch (err) {
        console.log("ERROR, verifyAuth:", err);
        if (err instanceof Errors) res.status(err.code).json(err);
        else res.status(Errors.standard.code).json(Errors.standard);
    }
};

memberController.retrieveAuth = async (
    req: ExtendedRequest, 
    res: Response, 
    next: NextFunction
) => {
    try {
        const token = req.cookies["accessToken"];
        if (token) req.member = await authService.checkAuth(token);

        next()
    } catch (err) {
        console.log("ERROR, retrieveAuth:", err);
        next();
    }
};


export default memberController;
