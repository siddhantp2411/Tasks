// siddhant src/routes/taskRoutes.js
const express = require('express');
const taskController = require('../controllers/taskController');
const errorMiddleware = require('../middleware/errorMiddleware');

const router = express.Router();

router.get('/tasks', taskController.getAllTasks);
router.get('/tasks/:id', taskController.getTaskById);
router.post('/tasks', taskController.createTask);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);


router.use(errorMiddleware);

module.exports = router;
