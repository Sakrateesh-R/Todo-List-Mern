import Task from "../Model/TaskModel.js";

export const createTask = (req,res) =>{
    const {task} = req.body;
    const newTask = new Task({task})
                                    .save()
                                    .then(() => res.status(201).json({sucess:true, data:"Data posted Successfully"}))
                                    .catch( (err) => res.status(400).json(`error occur ${err}`))
};
export const allTask = (req,res) => {
    Task.find()
        .then( (task) => res.status(200).json({task}))
        .catch( (err) => res.status(400).json(`Error occurs while getting post ${err}`))
    //res.send("Getting all Post");
};

export const updateTask = (req,res) =>{
    const{id : taskId} = req.params;
    //const {task} = req.body;
    Task.findByIdAndUpdate( (taskId))
                .then((task) => {
                    task.task = req.body.task;
                    console.log(task);
                    task.save()
                            .then( (posts) => res.status(201).json({msg:"data updated successfully"}))
                            .catch( (err) => res.status(400).json(`Error occurs while updating post ${err}`));
                })
                .catch( (err) => res.status(400).json(`error occur ${err}`))
};

export const deleteTask = (req,res) => {
    //res.send("Delete Post");
    const {id : taskId} = req.params;
    Task.findByIdAndDelete(taskId).then( () => {
        res.status(200).json({success : true, msg : "post deleted Successfully"})
    }).catch( (err) => res.status(400).json(`Error occurs while updating post ${err}`))
};