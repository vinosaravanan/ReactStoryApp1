const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv')
const app = express();

dotenv.config()


app.get('/get', async (req, res) => {
    res.send('hollo world')
})



const port = process.env.PORT || 8080
app.listen(port, ()=> console.log(`server is running on port ${port}`.bgCyan.white))