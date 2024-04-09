const express = require('express');
const { getStory, CreateStory, UpdateStory, getStoryById, deleteStory, getUsersAllStory } = require('../Conroller/StoryConroller');
const StoryRouter = express.Router();

StoryRouter.get('/get', getStory)
StoryRouter.post('/add', CreateStory)
StoryRouter.put('/update/:id', UpdateStory)
StoryRouter.get('/:id', getStoryById)
StoryRouter.delete('/:id', deleteStory)
StoryRouter.get('/user/:id', getUsersAllStory)

module.exports = StoryRouter

