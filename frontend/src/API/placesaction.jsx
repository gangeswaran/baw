import axios from 'axios';

export const getPlaces = async () => {
    try {
        const response = await axios.get('http://localhost:10000/api/getplaces/')
        return response.data
    } catch (error) {
        console.error(error)
    }
}

