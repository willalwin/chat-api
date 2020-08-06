const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
    try{
        const post = await Post.find();
        res.json(post);
    }catch(err){
        res.json({message : err});
    }
});

router.post('/', async (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }
    
});

//specific post
router.get('/:postId', async (req,res) => {
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message : err});
    }
});

//delete a post
router.delete('/:postId', async (req,res) => {
    try{
        const removePost = await Post.deleteOne({_id: req.params.postId});
        res.json(removePost);
    }catch(err){
        res.json({message : err});
    }
});

//update a post
router.patch('/:postId', async (req,res) => {
    try{
        const updatePost = await Post.updateOne({_id: req.params.postId},
             { $set: { title: req.body.title}});
        res.json(updatePost);
    }catch(err){
        res.json({message : err});
    }
});

module.exports = router;