const documentRepository = require('../repository/documentRepository.js');

const getDocumentsByUserId = async (req, res) => {
    try {
        const { user_id } = req.params;
        const documents = await documentRepository.getDocumentsByUserId(user_id);
        res.status(200).json(documents);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getDocumentsByUserId
}