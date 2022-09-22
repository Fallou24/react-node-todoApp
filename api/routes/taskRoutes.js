const express = require("express")
const router = express()
const mongoose = require("mongoose")
const Task = require("../models/taskModel");

//add a task
router.post("/", async (req, res) => {
    try {
        const newTask = new Task({
            name: req.body.name,
            completed: req.body.completed
        })
        const taskSaved = await newTask.save();
        res.json(taskSaved)
    } catch (err) {
        console.log(err);
    }

})
//delete a task
router.delete("/:id", async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndRemove(req.params.id)
        res.json(deletedTask)
    } catch (err) {
        console.log(err);
    }
})
//edit a task
router.put("/:id", async (req, res) => {
    try {
        const updated = await Task.findByIdAndUpdate(req.params.id, req.body)
        res.json(updated)
    } catch (err) {
        console.log(err);
    }

})

//get all task
router.get("/",async(req,res)=>{
    try {
        const taks = await Task.find()
        res.json(taks)
    } catch (err) {
        console.log(err);
    }
})
//get a task
router.get("/:id",async(req,res)=>{
    const task = await Task.findById(req.params.id)
    res.json(task)
})

module.exports = router