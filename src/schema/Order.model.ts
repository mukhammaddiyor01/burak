import mongoose, { Schema } from "mongoose";
import { OrderStatus } from "../libs/enums/order.enum";

const orderschema = new Schema({
    orderTotal: {
        type: Number, 
        required: true
    },

    orderDelivery: {
        type: Number,
        required: true,
    },

    orderStatus: {
        type: String,
        enum: OrderStatus.PAUSE,
    },

    memberId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Member",
    },

},
{timestamps:true, collection: "orders"}
);

export default mongoose.model("Order:", orderschema);