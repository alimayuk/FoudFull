import PostModel from "../models/Post.js";

export const createPost = async (req, res) => {
  const newPost = new PostModel(req.body);
  try {
    const savePost = await newPost.save();
    res.status(200).json(savePost);
  } catch (err) {
    res.status.json(err);
  }
};

export const getPost = async (req, res) => {
    try {
    const post = await PostModel.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  export const getAllPost = async (req, res) => {

    try {
        let posts;
        posts = await PostModel.find();
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  };



  export const updatePost = async (req, res) => {
    try {
      const post = await PostModel.findById(req.params.id);
      if (post.username === req.body.username) {
        try {
          const updatedPost = await PostModel.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
          res.status(200).json(updatedPost);
        } catch (err) {
          res.status(500).json(err);
        }
      } else {
        res.status(401).json("You can update only your post!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }

  export const deletePost = async (req,res)=>{
    try {
        const post = await PostModel.findById(req.params.id);
        if(post.username === req.body.username){
            try {
                await post.deleteOne();
            res.status(200).json("Post hass been deleted...");
            } catch (err) {
                res.status(500).json(err)
            }
        }else{
            res.status(401).json("You can only delete your post!")
        }
    } catch (err) {
        res.status(500).json(err)
    }
  }