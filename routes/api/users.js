const UserController = require('../../controllers/UserController');
var express = require('express');
const auth = require('../../middleware/auth');
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


/*  @route     POST api/users
    @desc     Get user data
    @access    Private
 */

router.get('/auth', auth, UserController.get_auth_user)

module.exports = router;
