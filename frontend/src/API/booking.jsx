import axios from 'axios';

export const Booking = async () => {
    try {
        const response = await axios.post('http://localhost:5000/api/book/')
        return response.data
    } catch (error) {
        console.error(error)
    }
}
