import express from 'express'
import taskController from '../controllers/taskController.js'
const router = express.Router()

router.post('/api/task/', taskController.createTask)
router.delete('/api/task/:id',taskController.deleteTask)
router.put('/api/task/:id',taskController.updateTask)
router.get('/api/task/:id',taskController.getTask)
router.get('/api/tasks',taskController.getAllTasks)

export default router