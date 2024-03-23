const express = require('express');
const { getStory, CreateStory } = require('../Conroller/StoryConroller');
const StoryRouter = express.Router();

StoryRouter.get('/get', getStory)
StoryRouter.post('/add', CreateStory)


module.exports = StoryRouter