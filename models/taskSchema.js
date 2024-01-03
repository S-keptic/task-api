import mongoose from "mongoose";

let taskSchema = new mongoose.Schema({
    title:{type:String,required:true},
    task:{type:String, required:true},
    date:{type:Date,default:Date.now()}

})

let taskModel = mongoose.model('task',taskSchema)

export default taskModel