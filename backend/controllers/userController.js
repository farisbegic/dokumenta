const userRepository = require('../repository/userRepository.js');

const findUserByEmail = async (req, res) => {
    const { email } = req.body

    const user = await userRepository.findUserByEmail(email);

    return res.status(200).json(user);
}

const updateUser = async (req, res) => {
    const { user_id } = req.params;
    const { name, surname, phone_number, id_number, municipality_id } = req.body

    const user = {
        user_id,
        name,
        surname,
        phone_number,
        id_number,
        municipality_id
    }

    const id = await userRepository.updateUser(user);

    return res.status(200).json(id);
}

module.exports = {
    findUserByEmail
}