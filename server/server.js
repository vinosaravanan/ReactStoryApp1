const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv')
const app = express();
const dbConnection = require('./Dbconfig/DBconnection');
dotenv.config();
const morgan = require('morgan')
const UserRouter = require('./Route/UserRouter');
const StoryRouter = require('./Route/StoryRouter');


// db connection 
dbConnection();

// middleware
app.use(express.json())
app.use(morgan('dev'))

// router middleware
app.use('/api/auth/', UserRouter)
app.use('/api/story/', StoryRouter)

const port = process.env.PORT || 8080
app.listen(port, ()=> console.log(`server is running on port ${port}`.bgCyan.white))

