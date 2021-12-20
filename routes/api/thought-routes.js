const router = require('express').Router();

const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  removeReaction,
  addReaction,
} = require('../../controllers/thought-controller');

// /api/pizzas
router.route('/').get(getAllThought);

// /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/<userId>
router.route('/:userId').post(createThought);

// /api/thoughts/:userId
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/<userId>/<thoughtId>/<reactionId>
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
