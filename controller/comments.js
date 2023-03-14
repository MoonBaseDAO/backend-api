// controllers/commentController.js

const db = require('../db');

// Retrieve all comments associated with a specific task
exports.getAllComments = async (req, res, next) => {
  try {
    const taskId = req.params.task_id;
    const comments = await db.query('SELECT * FROM comments WHERE task_id = $1', [taskId]);
    res.status(200).json({
      status: 'success',
      results: comments.rows.length,
      data: {
        comments: comments.rows,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'error',
      message: 'Error retrieving comments',
    });
  }
};

// Add a new comment to a specific task
exports.createComment = async (req, res, next) => {
  try {
    const { task_id, user_id, comment } = req.body;
    const newComment = await db.query(
      'INSERT INTO comments (task_id, user_id, comment) VALUES ($1, $2, $3) RETURNING *',
      [task_id, user_id, comment]
    );
    res.status(201).json({
      status: 'success',
      data: {
        comment: newComment.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'error',
      message: 'Error creating comment',
    });
  }
};
// Update a specific comment by ID
exports.updateComment = async (req, res, next) => {
  try {
    const commentId = req.params.comment_id;
    const { comment } = req.body;
    const updatedComment = await db.query(
      'UPDATE comments SET comment = $1 WHERE id = $2 RETURNING *',
      [comment, commentId]
    );
    if (updatedComment.rows.length === 0) {
      return res.status(404).json({
        status: 'error',
        message: 'Comment not found',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        comment: updatedComment.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'error',
      message: 'Error updating comment',
    });
  }
};

// Delete a specific comment by ID
exports.deleteComment = async (req, res, next) => {
  try {
    const commentId = req.params.comment_id;
    const deletedComment = await db.query('DELETE FROM comments WHERE id = $1 RETURNING *', [commentId]);
    if (deletedComment.rows.length === 0) {
      return res.status(404).json({
        status: 'error',
        message: 'Comment not found',
      });
    }
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 'error',
      message: 'Error deleting comment',
    });
  }
};
