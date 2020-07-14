const UserController = require('../../controllers/UserController');
var express = require('express');
var router = express.Router();

/*  @route     POST api/users
    @desc      Register a new user
    @access    Public
 */
router.post('/', UserController.create_new_user);

/*  @route     POST api/users/login
    @desc      Login a user
    @access    Public
 */
router.post('/login', UserController.login_user);

module.exports = router;
