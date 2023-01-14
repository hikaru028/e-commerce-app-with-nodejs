const jwToken = require('jsonwebtoken');

const generateToken = (id) => {
    return jwToken.sign((id).process.env.JWT_SECRET, { expiresIn: '3d'});
};

module.exports = { generateToken };