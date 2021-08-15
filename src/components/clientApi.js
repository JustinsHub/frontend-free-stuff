import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class Client {

static async registerClient(clientInfo) {
    try {
        const results = await axios.post(`${BASE_URL}/client/new`, clientInfo)
        return results
    } catch (error) {
        return error.response.data.error.message
    }
}
}  

export default Client