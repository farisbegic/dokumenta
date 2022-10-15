const knex = require('../db/db.js');
const userRepository = require('../repository/userRepository.js');

const getRequestsByUserId = async (user_id) => {
    await userRepository.checkUserById(user_id);

    return knex('request').where({user: user_id});
}

const saveRequest = async (request) => {
    await checkIfDocumentExists(request.document);
    await userRepository.checkUserById(request.user);

    const id = await knex('request').insert(request, 'request_id');

    if (!id) {
        throw new Error('Request not created');
    }

    return id;
}

const checkIfDocumentExists = async (document_id) => {
    const document = await knex('document').where({document_id}).first();

    if (!document) {
        throw new Error('Document not found');
    }

    return document;
}

const checkIfRequestExists = async (request_id) => {
    const request = await knex('request').where({request_id}).first();

    if (!request) {
        throw new Error('Request not found');
    }

    return request;
}

const getAllDocuments = async () => {
    return knex('document');
}

const getDocumentById = async (document_id) => {
    await checkIfDocumentExists(document_id);

    return knex('document').where({document_id}).first();
}

const changeRequestStatus = async (request_id) => {
    const document = await checkIfRequestExists(request_id);

    return knex('request').where({request_id}).update({is_completed: !document.is_completed});
}

module.exports = {
    getRequestsByUserId,
    saveRequest,
    checkIfDocumentExists,
    getAllDocuments,
    getDocumentById,
    changeRequestStatus
}