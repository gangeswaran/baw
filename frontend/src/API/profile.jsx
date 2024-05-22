import axios from "axios";

export const getProfile = async () => {
    try {
        const response = await axios.get('https://baw1.onrender.com/api/profile/')
        return response.data
    } catch (error) {
        console.error(error)
    }
}