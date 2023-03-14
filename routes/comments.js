const express = require('express');
const router = express.Router({ mergeParams: true });
const { getTaskComments, createTaskComment } = require('../controllers/comments');

// define routes
router.get('/', getTaskComments);
router.post('/', createTaskComment);

module.exports = router;
