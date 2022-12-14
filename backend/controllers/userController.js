const userRepository = require('../repository/userRepository.js');

const findUserByEmail = async (req, res) => {
    const {email} = req.body

    const user = await userRepository.findUserByEmail(email);

    return res.status(200).json(user);
}

const updateUser = async (req, res) => {
    const { user_id } = req;
    const {name, surname, phone_number, id_number, phone} = req.body

    try {
        const user = {
            user_id,
            name,
            surname,
            id_number,
            phone
        }

        const id = await userRepository.updateUser(user);

        return res.status(200).json(id);
    } catch (error) {
        return res.status(404).json({"Error": error.message});
    }
}

const getUserInformation = async (req, res) => {
    const { user_id } = req

    try {
        const user = await userRepository.getUserInformation(user_id);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(404).json({"Error": error.message});
    }
}

module.exports = {
    findUserByEmail,
    updateUser,
    getUserInformation
}