const express = require('express');
const router = express.Router({ mergeParams: true });
const { getTeamMembers, addTeamMember, getTeamProjects, createTeamProject, deleteTeamMember } = require('../controllers/teams');

// define routes
router.get('/:id/members', getTeamMembers);
router.post
