import taskModel from "../models/taskSchema.js"

class taskController {
    static createTask = async (req, res) => {
        let { title, task, date } = req.body
        try {
            const taskDoc = new taskModel({
                title: title,
                task: task,
                date: date,

            })
            await taskDoc.save()

        } catch (err) {
            console.log(err)
        }
        res.send("created successfully")
    }
    static updateTask = async (req, res) => {
       try{ let id = req.params.id
        let {title,task,date} = req.body
        const result = await taskModel.findByIdAndUpdate(id, { title, task, date }, { new: true });
        console.log(result)
        res.send("updated successfully")
       }catch(err){
        console.log(err)
       }
    }
    static deleteTask = async(req, res) => {
        try{
            let id = req.params.id
            let result  = await taskModel.deleteOne({_id:id})
            console.log(result)
            res.send("deleted successfully")
        }catch(err){
            console.log(err)
        }
        
        
    }
    static getTask = async(req, res) => {
        let id = req.params.id
        const result = await taskModel.findById(id)
        res.send(result)        

    }
    static getAllTasks = async (req, res) => {
        const result = await taskModel.find()
        res.send(result)
    }
}

export default taskController