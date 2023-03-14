const express = require('express');
const router = express.Router({ mergeParams: true });
const { getTaskAttachments, createTaskAttachment } = require('../controllers/attachments');

// define routes
router.get('/', getTaskAttachments);
router.post('/', createTaskAttachment);

module.exports = router;
