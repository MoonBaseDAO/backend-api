const express = require('express');
const router = express.Router({ mergeParams: true });
const { getUserTasks } = require('../controllers/users');

// define routes
router.get('/:id/tasks', getUserTasks);

module.exports = router;
