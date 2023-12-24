// siddhant src/controllers/taskController.js
const Task = require('../models/taskModel');

let tasks = [
    new Task(1, 'Task 1', 'Description for Task 1'),
    new Task(2, 'Task 2', 'Description for Task 2'),
];

exports.getAllTasks = (req, res) => {
    res.json(tasks);
};

exports.getTaskById = (req, res) => {
    
};

exports.createTask = (req, res) => {
    
};

exports.updateTask = (req, res) => {

};

exports.deleteTask = (req, res) => {
    
};
