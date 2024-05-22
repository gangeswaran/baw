import axios from 'axios';

export const Payment = async () => {
    try {
        const response = await axios.post('https://baw1.onrender.com/api/payment/')
        return response.data
    } catch (error) {
        console.error(error)
    }
}
