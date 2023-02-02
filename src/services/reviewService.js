import axios from "axios";
const baseUrl = 'http://localhost:3005/books'
function create(bookId, newReview) {
    const config = {
        headers: {
            Authorization: `bearer ${window.localStorage.getItem('loggedInUser')}`
        }
    }
    return axios.post(`${baseUrl}/${bookId}/reviews`, newReview, config)
}

function remove(bookId, reviewId) {
    const config = {
        headers: {
            Authorization: `bearer ${window.localStorage.getItem('loggedInUser')}`
        }
    }
    return axios.delete(`${baseUrl}/${bookId}/reviews/${reviewId}`, config)
}

export default { create, remove }