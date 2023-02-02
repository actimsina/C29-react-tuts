import axios from "axios";
const baseUrl = "http://localhost:3005/books"


const getAll = () => {
    let token = `bearer ${window.localStorage.getItem('loggedInUser')}`
    const config = {
        headers: { Authorization: token }
    }
    return axios.get(baseUrl, config)
}

export default { getAll }