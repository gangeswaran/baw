import axios from 'axios';

export const signUp = async () => {
    try {
        const response = await axios.post('https://baw1.onrender.com/api/signup/')
        return response.data
    } catch (error) {
        console.error(error)
    }
}

