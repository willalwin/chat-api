const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.send('We are at posts');
});

router.get('/specific', (req, res) => {
    res.send('We are on a specific post');
});

router.post('/', (req, res) => {
    console.log(req.body);
})

module.exports = router;