const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');

//Creating a new user
exports.create_new_user = (req, res) => {
    const { name, email, password } = req.body;

    //validation
    if (!name || !email || !password) {
        return res.status(400).json({
            success: false,
            msg: 'Please enter all fields'
        });
    }

    //..Checking if user already exist
    User.findOne({ email: email })
        .then(user => {
            if (user) return res.status(400).json({ msg: 'User already exist' })
            //creating new user object
            const newUser = new User({
                name: name,
                email: email,
                password: password
            });

            // saving
            User.newUser(newUser, (err, user) => {
                if (err) throw err;
                //jwt
                jwt.sign({
                    id: user._id,
                    name: user.name,
                    email: user.email,
                }, config.get('jwtPrivateKey'),
                    {
                        expiresIn: 3600
                    }, (err, token) => {
                        if (err) throw err;
                        return res.json({
                            token: token,
                            user: {
                                id: user._id,
                                name: user.name,
                                email: user.email
                            }
                        });
                    }
                );

            });
        })
}


//Logginh the user
exports.login_user = async (req, res,) => {
    const { email, password } = req.body;

    // //validation
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            msg: 'Please enter all fields'
        });
    }
    await User.findOne({ email: email }).then(user => {
        if (!user) {
            return res.status(400).json({
                success: false,
                msg: "Username or Password is incorrect"
            });
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (!isMatch) {
                return res.status(400).json({
                    success: false,
                    msg: "Username or Password is incorrect"
                });
            } else {
                // success login ... Generating jwt for auth
                jwt.sign({ _id: user._id, email: user.Email }, config.get('jwtPrivateKey'), {
                    expiresIn: 3600
                }, (err, token) => {
                    if (err) throw err;
                    return res.status(200).json({
                        token,
                        success: true,
                        msg: "Login successfully"
                    });
                });
            }
        })
    })
}
exports.get_auth_user = (req, res) => {
    User.findById(req.user.id).select('-password')
        .then(user => {
            res.json({
                success: true,
                user: user
            })
        })
        .catch(err => console.log(err))
}