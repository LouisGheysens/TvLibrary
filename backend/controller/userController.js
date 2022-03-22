const { db, off } = require('../models/Movie');
const User = require('../models/User');
const bodyParser = require('body-parser');

//Get
const getAllUsers = async (req, res) => {
    try{
        User.find().then(x => { res.status(200).json(x)})
    }catch(error) {
        console.error(error);
        res.status(500).json({message: "Server getAll() error!"});
    }
}

//Get/:id
const getUser = async (req, res) => {
    User.findOne({ email: req.body.email }, function(err, user) {
        if(user === null){
            return res.status(400).send({
                message: 'User not found'
            });
        }else{
            if (user.validPassword(req.body.password)) { 
                return res.status(201).send({ 
                    message : "User Logged In", 
                }) 
            }else{
                return res.status(400).send({ 
                    message : "Wrong Password"
                }); 
                } 
            }
        });
    }

//Post
const addUser = async (req, res) => {
    try{
        if(userExists(req.body.email)){
            res.status(409).json({error: 'Email already exists'})
        }else{
            const newUser = new User(req.body);
            newUser.save().then(x => {res.status(200).json(newUser)})
        }
    }catch(error) {
        console.error(error);
        res.status(400).json({message: "Server AddUser(movie) error!"});
    }
}

//Put
const updateUser = async (req, res) => {
    try{
        Movie.findOneAndUpdate({_id: req.params.id}, {
            $set: {
                email: req.body.email,
                password: req.body.password,
                profileImageUrl: req.body.profileImageUrl,
            }
        })
        .then(result => {
            res.status(200).json({
                updated_user: result
            })
        })
    }catch(error) {
        console.error(error);
        res.status(400).json({message: "Server UpdateUser(id) error!"});
    }
}

//Delete
const deleteUser = async (req, res) => {
    try{
        const deletedUser = await User.findByIdAndRemove(req.params.id);
        res.json({ message: 'Deleted object'});
    }catch(error) {
        console.error(error);
        res.status(500).json({message: "Server DeleteMovie(id) error!"});
    }
}


//Email check
const userExists = (email) => {
    User.findOne({email: email.toLowerCase().trim()}).then(x => { if(x){ return true} else{ return false}})
}

module.exports = {
    getAllUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser,
}