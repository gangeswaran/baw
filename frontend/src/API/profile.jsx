import axios from "axios";

export const getProfile = async () => {
    try {
        const response = await axios.get('http://localhost:10000/api/profile/')
        return response.data
    } catch (error) {
        console.error(error)
    }
}