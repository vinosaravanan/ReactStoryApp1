const express = require('express');
const { getUsers, SignupUsers, LoginUsers } = require('../Conroller/UserConroller');
const User = require('../Model/UserModel');
const UserRouter = express.Router()

UserRouter.get('/user', getUsers)
UserRouter.post('/signup', SignupUsers)
UserRouter.post('/login', LoginUsers)

module.exports = UserRouter