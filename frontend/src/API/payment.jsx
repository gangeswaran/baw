import axios from 'axios';

export const Payment = async () => {
    try {
        const response = await axios.post('http://localhost:4000/api/payment/')
        return response.data
    } catch (error) {
        console.error(error)
    }
}
