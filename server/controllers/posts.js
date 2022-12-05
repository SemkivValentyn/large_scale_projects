import Post from "../models/Post.js";
import User from "../models/User.js";

//Create
export const createPost = async (req, res) => {
    try {
        const {userId, description, picturePath} = req.body;
        const user = await User.findById(userId);
        const newPost = new Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            usePicturePath: user.picturePath,
            picturePath,
            likes: {},
            comments: [],
        })

        await newPost.save();
        const post = await Post.find();

        res.status(201).json(post);
    } catch (err) {
        res.status(409).json({message: err.message})
    }
}

export const getFeedPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(201).json(posts);
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}

export const getUserPosts = async (req, res) => {
    try {
        const {userId} = req.params;
        const post = await Post.find({userId});
        res.status(201).json(post);
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}

//Create
export const likePost = async (req, res) => {
    try {
        const {id} = req.params;
        const {userId} = req.body;
        const post = await Post.findById(id);
        const isLiked = post.likes.get(userId)
        res.status(201).json();
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}