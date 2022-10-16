import API from '../utils/axios';
import { USER_REQUESTS, DOCUMENT } from '../constants/endpoints';

const authentication = {
    async getUserRequests() {
        return await API.get(USER_REQUESTS);
    },
    async getDocuments() {
        return await API.get(DOCUMENT);
    }
}

export default authentication;