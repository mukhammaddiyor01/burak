import mongoose, {Schema} from 'mongoose';
import { MemberType } from '../libs/types/enums/member.enum';
// Schema first/ Code first

// Schema first
const memberSchema = new Schema({
    memberType: {
        type: String,
        enum: MemberType,
        default: MemberType.USER
    },

    memberStatus: {
        type: String,
        enum: MemberStatus,
        default: MemberStatus.ACTIVE
    },

    memberNick: {
        type: String,
        index: {unique: true, sparse: true},
        required: true,
    },

    memberPhone: {
        type:String,
        index: {unique: true, sparse: true},
        required: true,
    },

    memberPassword: {
        type: String,
        select: false,
        required: true,
    },

    memberAddress: {
        type: String,
    },

    memberDesc: {
        type: String,
    },


    memberDesc: {

    },

    memberImage: {
        type: String,
    },

    memberPoints: {
        type: Number,
        default: 0,
    },

}
    {timestamps: true}    // updatedAt, createdAt
);

export default mongoose.model("member", memberSchema);