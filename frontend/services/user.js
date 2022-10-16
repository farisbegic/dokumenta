import API from '../utils/axios';
import { USER_INFORMATION } from '../constants/endpoints';

const authentication = {
    async getUserInformation() {
        return await API.get(USER_INFORMATION)
    }
}

export default authentication;