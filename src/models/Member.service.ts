import { Member, MemberInput } from "../libs/types/member";
import MemberModel from "../schema/Member.model";
import Errors, { Httpcode, Message } from "../libs/Errors";
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
        
    if(exist)  throw new Errors(Httpcode.BAD_REQUEST, Message.CREATE_FAILED);

    try {
        const tempResult = new this.memberModel(input);
        const result = await tempResult.save()

        result.memberPassword = "";

        return result;
    } catch (err) {
        throw new Errors(Httpcode.BAD_REQUEST, Message.CREATE_FAILED);
    }
}
}

export default MemberService;

