const municipalityRepository = require('../repositories/municipalityRepository');

const getAllMunicipalities = async () => {
    return await municipalityRepository.getAllMunicipalities();
}

module.exports = {
    getAllMunicipalities
}