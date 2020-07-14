const config = require('config');
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.header('x-auth-token');

    //check for token
    if (!token) return res.status(401).json({ mgs: 'Unauthorized access' });

    try {
        //verify token 
        const decoded = jwt.verify(token, config.get('jwtPrivateKey'));

        //add user from payload
        req.user = decoded;
        next();

    } catch (err) {
        return res.status(400).json({ mgs: 'No access token' });
    }
}



module.exports = auth;