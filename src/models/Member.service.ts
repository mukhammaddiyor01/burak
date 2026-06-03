import { LoginInput, Member, MemberInput } from "../libs/types/member";
import MemberModel from "../schema/Member.model";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { MemberType } from "../libs/enums/member.enum";

class MemberService {
    private readonly memberModel;

    constructor() {
        this.memberModel = MemberModel;
    }

    public async processSignup(input: MemberInput): Promise<Member> { // agar methodimiz async method bo'lmasa Promise ishlatilinmaydi
        // const result = await this.memberModel.create(input);
    const exist = await this.memberModel
        .findOne({memberType: MemberType.RESTAURANT})
        .exec();
        console.log("exist:", exist);
         
    if(exist)  throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);

    try {
        const tempResult = new this.memberModel(input);
        const result = await tempResult.save()

        result.memberPassword = "";

        return result;
    } catch (err) {
        throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
}
    public async processLogin(input: LoginInput): Promise<Member> {
        const member = await this.memberModel
            .findOne(
                {memberNick: input.memberNick},
                {memberNick: 1, memberPassword: 1}   // bu usul database dan mahfiy malumotlarni chaqirib olamiz ekan
            )
            .exec();
        if(!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

        const isMatch = input.memberPassword === member.memberPassword;
        // console.log("isMatch:", isMatch);

        if(!isMatch) {
            throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
        }

        const result = await this.memberModel.findById(member._id).exec();
        if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

        // console.log("result:", result);
        return result;
    }   
}

export default MemberService;
