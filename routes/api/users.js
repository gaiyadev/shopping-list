const UserController = require('../../controllers/UserController');
var express = require('express');
const User = require('../../models/user');
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

router.get('/auth', auth, (req, res) => {
    User.findById(req.user.id).select('-password')
        .then(user => {
            res.json({
                success: true,
                user: user
            })
        })
        .catch(err => console.log(err))
})

module.exports = router;
