import axios from "axios"
const baseUrl = 'http://localhost:3005/users'

const register = (user) => {
    return axios.post(`${baseUrl}/register`, user)
}

export default { register }