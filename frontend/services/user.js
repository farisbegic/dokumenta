import API from '../utils/axios';
import { USER_INFORMATION, USER } from '../constants/endpoints';

const authentication = {
    async getUserInformation() {
        return await API.get(USER_INFORMATION)
    },
    async updateUser(payload) {
        return await API.put(USER, payload)
    }
}

export default authentication;