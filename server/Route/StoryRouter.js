const express = require('express');
const { getStory, CreateStory, UpdateStory } = require('../Conroller/StoryConroller');
const StoryRouter = express.Router();

StoryRouter.get('/get', getStory)
StoryRouter.post('/add', CreateStory)
StoryRouter.put('/update/:id', UpdateStory)

module.exports = StoryRouter

