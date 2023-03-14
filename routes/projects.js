const express = require('express');
const router = express.Router({ mergeParams: true });
const { getAllProjectTasks, createProjectTask, updateProject, deleteProject } = require('../controllers/projects');

// define routes
router.get('/:id/tasks', getAllProjectTasks);
router.post('/', createProjectTask);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

module.exports = router;
