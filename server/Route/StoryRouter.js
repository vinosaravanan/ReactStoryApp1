const express = require('express');
const { getStory } = require('../Conroller/StoryConroller');
const StoryRouter = express.Router();

StoryRouter.get('/get', getStory)



module.exports = StoryRouter