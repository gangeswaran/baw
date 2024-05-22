import axios from 'axios';

export const getPlaces = async () => {
    try {
        const response = await axios.get('https://baw1.onrender.com/api/getplaces/')
        return response.data
    } catch (error) {
        console.error(error)
    }
}

