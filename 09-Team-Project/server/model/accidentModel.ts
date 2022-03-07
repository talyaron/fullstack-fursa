
import {UserSchema} from "./userModel";

import MediaSchema from './mediaSchema';
import { OrgSchema } from "./orgModel";
const mongoose = require("mongoose");


const accidentSchema = new mongoose.Schema({

    type: String,
    emergency : Boolean || null,
    date: String,
    address:Location,
    media: [MediaSchema],
    call: Object,
    description: String,
    user: UserSchema,
    org:OrgSchema
})
const accident = mongoose.model("accident",accidentSchema);
export default accidentSchema;


