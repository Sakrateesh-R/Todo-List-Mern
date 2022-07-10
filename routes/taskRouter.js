import express from "express";
import { allTask, createTask, deleteTask, updateTask } from "../controller/taskController.js";

const router = express.Router();

router.post('/add',createTask);
router.get('/',allTask);
router.put('/update/:id',updateTask);
router.delete('/delete/:id',deleteTask);

export default router;