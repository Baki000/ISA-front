import axios from 'axios'

const USER_URL = "http://localhost:8080/api/User/getAll"
class UserService{

    getUsers(){
        return axios.get(USER_URL);
    }

}

export default new UserService()