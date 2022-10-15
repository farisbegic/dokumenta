const documentRepository = require('../repository/documentRepository.js');
const token = require("../helpers/token");

const getRequestsByUserId = async (req, res) => {
    try {
        const { user_id } = req;
        const documents = await documentRepository.getRequestsByUserId(user_id);
        res.status(200).json(documents);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const saveRequest = async (req, res) => {
    try {
        // should also save blob
        const { user_id: user } = req
        const { name, surname, id_number, phone, is_urgent, is_paid, document } = req.body;

        const id = await documentRepository.saveRequest({
            name,
            surname,
            id_number,
            phone,
            is_urgent,
            is_paid,
            document,
            user
        });
        res.status(200).json(id);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getRequestsByUserId,
    saveRequest
}