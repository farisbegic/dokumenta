import API from '../utils/axios';
import { USER_REQUESTS } from '../constants/endpoints';

const authentication = {
    async getUserRequests() {
        return await API.get(USER_REQUESTS);
    },
}

export default authentication;