const municipalityRepository = require('../repository/municipalityRepository.js');

const getAllMunicipalities = async () => {
    return await municipalityRepository.getAllMunicipalities();
}

module.exports = {
    getAllMunicipalities
}