export {}
import {UserSchema} from "./userModel";

import MediaSchema from './mediaSchema';
import { OrgSchema } from "./orgModel";
const mongoose = require("mongoose");


export const AccidentSchema = new mongoose.Schema({

    type: String,
    emergency : Boolean || null,
    date: String,
    address:String,
    media: [MediaSchema],
    call: Object,
    description: String,
    user: UserSchema,
    org:OrgSchema
})
const AccidentModel = mongoose.model("accidents",AccidentSchema);
export default AccidentModel;


