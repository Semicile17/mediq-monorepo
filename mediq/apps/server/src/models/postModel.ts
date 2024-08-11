import {User} from "./userModel"
import mongoose from "mongoose";


const postSchema = new mongoose.Schema({
    content:{
        type:String,
        required:[true,'A post must have some content'],
    },
    media:{
        type:Array
    },
    postMaker:{
        type:mongoose.Schema.ObjectId,
        ref: User,
        required:[true,'A post must have a post Maker']
    },
    likes:{
        type:Number,
        default:0
    },
    saved:{
        type:Boolean,
        default:false
    }
})

export const postModel = mongoose.model('Post',postSchema);