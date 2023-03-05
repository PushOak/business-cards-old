import axios from 'axios';

const apiURL = 'http://localhost:8181';


export const getCards = async () => {
    try {
        const { data } = await axios.get(`${apiURL}/cards`);
        console.log(data);
        return data;
    } catch (error) {
        return Promise.reject(error.message);
    }
}

