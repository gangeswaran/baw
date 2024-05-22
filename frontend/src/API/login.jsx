import axios from 'axios';

export const logIn = async () => {
    try {
        const response = await axios.post('http://localhost:10000/api/login/')
        return response.data
    } catch (error) {
        console.error(error)
    }
}
