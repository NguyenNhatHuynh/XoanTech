import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getProducts = async () => {
    const response = await api.get('/products');
    return response.data;
};