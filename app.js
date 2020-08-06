const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
const app = express();


//middleware
const postsRoute = require('./routes/posts');
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/posts', postsRoute)


//routes
app.get('/', (req, res) => {
    res.send('We are at home');
});

//connect to db
mongoose.connect(process.env.DB_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    })
    .then(() => console.log('DB Connected!'))
    .catch(err => {
    console.log(err);
    });

//start listening to server
app.listen(3000);