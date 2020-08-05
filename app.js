const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();


//middleware
//import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute)


//routes
app.get('/', (req, res) => {
    res.send('We are at home');
});



//connect to db
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true },
    () => console.log('Connected to db')
);

//start listening to server
app.listen(3000);