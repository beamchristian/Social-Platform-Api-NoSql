const router = require('express').Router();

const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  removeReaction,
} = require('../../controllers/thought-controller');

// /api/pizzas
router.route('/').get(getAllThought);

// /api/thoughts/<userId>
router.route('/:userId').post(createThought);

// /api/pizzas/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/<userId>/<thoughtId>/<reactionId>
router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction);

module.exports = router;
