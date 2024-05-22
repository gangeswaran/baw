import axios from 'axios';

export const Booking = async () => {
    try {
        const response = await axios.post('https://baw1.onrender.com/api/book/')
        return response.data
    } catch (error) {
        console.error(error)
    }
}
