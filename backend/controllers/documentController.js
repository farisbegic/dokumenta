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

const getAllDocuments = async (req, res) => {
    try {
        const documents = await documentRepository.getAllDocuments();
        res.status(200).json(documents);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getDocumentById = async (req, res) => {
    try {
        const { id } = req.params;
        const document = await documentRepository.getDocumentById(id);
        res.status(200).json(document);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const changeDocumentStatus = async (req, res) => {
    try {
        const { id } = req.params;
        await documentRepository.changeRequestStatus(id);
        res.status(200).json({
            message: "Document status changed successfully."
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getRequestsByUserId,
    saveRequest,
    getAllDocuments,
    getDocumentById,
    changeDocumentStatus
}