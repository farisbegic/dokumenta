import API from '../utils/axios';
import { LOGIN, REGISTER } from '../constants/endpoints';

const authentication = {
    async register(payload) {
        return await API.post(REGISTER, payload)
    },
    async login(payload) {
        return await API.post(LOGIN, payload)
    },
}

export default authentication;