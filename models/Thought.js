const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAtVal => dateFormat(createdAtVal),
  },
});

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: [true, 'Thought text is required!'],
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: createdAtVal => dateFormat(createdAtVal),
  },
  username: {
    type: String,
    required: true,
  },
  // reactions: [reactionSchema]
});

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

// create the Thought model using the ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

// export the Thought model
module.exports = Thought;
