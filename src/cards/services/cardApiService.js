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

export const getMyCards = async () => {
    try {
        const { data } = await axios.get(`${apiURL}/cards/my-cards`);
        console.log(data);
        return data;
    } catch (error) {
        return Promise.reject(error.message);
    }
}

export const deleteCard = async (cardId) => {
    try {
        const { data } = await axios.delete(`${apiURL}/cards/${cardId}`);
        return data;
    } catch (error) {
        return Promise.reject(error.message);
    }
};


