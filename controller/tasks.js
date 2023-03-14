const Task = require('../models/Task');

// GET /tasks
exports.getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

// POST /tasks
exports.createTask = async (req, res, next) => {
  try {
    const task = new Task(req.body);
    const createdTask = await task.save();
    res.status(201).json(createdTask);
  } catch (error) {
    next(error);
  }
};

// GET /tasks/:id
exports.getTaskById = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      res.status(404).send('Task not found');
      return;
    }
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

// PUT /tasks/:id
exports.updateTaskById = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!task) {
      res.status(404).send('Task not found');
      return;
    }
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

// DELETE /tasks/:id
exports.deleteTaskById = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      res.status(404).send('Task not found');
      return;
    }
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};
