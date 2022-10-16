const bcrypt = require("bcryptjs");
const token = require("../helpers/token");
const userRepository = require('../repository/userRepository');
const roleRepository = require('../repository/roleRepository');
const roleConstants = require('../constants/roles');

const login = async (req, res) => {
    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "All input fields are required"
        })
    }

    try {
        const user = await userRepository.findUserByEmail(email);

        if (!user) {
            return res.status(400).json({
                message: "Invalid email."
            })
        }

        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({
                message: "Incorrect password."
            })
        }

        const accessToken = token.signAccessToken(user.user_id);

        res.json({
            token: accessToken
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

const register = async (req, res) => {
    const {name, surname, email, password, confirm_password, id_number, phone, municipality} = req.body

    if (password !== confirm_password) {
        return res.status(400).json({
            message: "Passwords do not match."
        })
    }

    try {
        const existingUser = await userRepository.checkIfUserExists(email);

        if (existingUser) {
            return res.status(400).json({
                message: "Email already exists."
            })
        }

        const roles = await roleRepository.getRoles();

        const role = roles.find(role => role.name === roleConstants.user).role_id;

        const user = await userRepository.createUser({
            name,
            surname,
            email,
            password: bcrypt.hashSync(password, 10),
            id_number,
            phone,
            role,
            municipality
        });

        const accessToken = token.signAccessToken(user[0].user_id);

        res.json({
            token: accessToken
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

module.exports = {
    login,
    register
}