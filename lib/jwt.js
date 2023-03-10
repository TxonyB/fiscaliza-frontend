const jwt = require('jsonwebtoken');

module.exports = (token) => {
    try {
        const decoded = jwt.verify(token, 'tonyboi');
        return decoded;
    } catch (err) {
        return null;
    }
}
