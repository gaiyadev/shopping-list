const User = require('../../models/user');
const bcript = require('bcrypt');
const jwt = require('jsonwebtoken');

//Creating a new user
exports.create_new_user = (req, res) => {
    const { name, email, password } = req.body;

    //validation
    if (!name || !email || !password) {
        res.status(400).json({
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
            //generating sALt and hashing
            bcript.genSalt(10, (err, salt) => {
                if (err) throw err;
                bcript.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save().then(user => {
                        res.json({
                            user: {
                                id: user._id,
                                name: user.name,
                                email: user.email
                            }
                        })
                    })
                        .catch(err => console.log(err));
                })
            });
        })
}


//Logginh the user
exports.login_user = (req, res,) => {
    const { email, password } = req.body;

    //validation
    if (!name || !email || !password) {
        res.status(400).json({
            success: false,
            msg: 'Please enter all fields'
        });
    }

    //Checking for user
    

}