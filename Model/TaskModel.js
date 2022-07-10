import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    task:{
        type:String,
        trim:true,
        maxlength:[200,"You have exceed the number of words in the list "],
        requried : true
    },
    complete:{
        default:false
    }
});

const Task = mongoose.model('Task',taskSchema);
export default Task;