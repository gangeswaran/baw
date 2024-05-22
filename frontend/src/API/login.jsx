import axios from 'axios';

export const logIn = async () => {
    try {
        const response = await axios.post('https://baw1.onrender.com/api/login/')
        return response.data
    } catch (error) {
        console.error(error)
    }
}
