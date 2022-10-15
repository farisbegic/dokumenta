const userRepository = require('../repository/userRepository.js');

const findUserByEmail = async (req, res) => {
    const { email } = req.body

    const user = await userRepository.findUserByEmail(email);

    return res.status(200).json(user);
}

module.exports = {
    findUserByEmail
}