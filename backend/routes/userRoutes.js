const express = require('express');
const router = express.Router();
const {  getAllUsers, getUser, addUser, updateUser, deleteUser, } = require('../controller/UserController')


//@desc GET ALL MOVIES
//@route GET api/users
//@access Public
router.get('/', getAllUsers);

//@desc GET MOVIE
//@route GET api/users/id
//@access Public
router.get('/:id', getUser);

//@desc Post MOVIE
//@route POST api/users/save
//@access Public
router.post('/save', addUser);

//@desc PUT MOVIE
//@route PUT api/users/update/id
//@access Public
router.put('/:id', updateUser);

//@desc DELETE MOVIE
//@route DELETE api/users/id
//@access Public
router.delete('/:id', deleteUser);

module.exports = router;