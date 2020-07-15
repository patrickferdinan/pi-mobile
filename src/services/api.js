import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pi-event-imepac-api.herokuapp.com'
});

export default api;