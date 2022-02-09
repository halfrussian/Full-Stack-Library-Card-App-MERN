const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


//gets all the posts 
router.get('/books', async (req, res) => {
    
  try{
    const posts = await Post.find();
    res.json(posts)
  } catch(err) {
    res.json({message: err})
  }
});

//submits a post 
router.post('/', async (req, res) => {
    const post = new Post({
      title: req.body.title,
      author: req.body.author,
      pages: req.body.pages,
      readStatus: req.body.readStatus
    });
    try{
      const savedPosts = await post.save()
      res.json(savedPosts)
    } catch(err) {
      res.json({message:err})
    }

})


//singlebook book
router.get('/singlebook', async (req, res, next) => {

  try{
  const post = await Post.findOne({title: "The sacred mushroom"});
  res.json(post);

  } catch(err) {

  } 
  return next()
 
})


//removes


router.delete('/:bookId', async (req, res) => {
  
  try{
    const removed = await Post.remove({_id: req.params.bookId})
    res.json(removed)
  } catch(err){
    console.log(err)
  }
})

//update 

router.patch('/:bookId', async (req, res)=> {

  try {
   const update = await Post.updateOne(
     {_id: req.params.bookId}, 
     {$set: {title: req.body.title}}
     );
     
   res.json(update)
  } catch(err) {
    console.log(err)
  } 
 
})




module.exports = router;


   