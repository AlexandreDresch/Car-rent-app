import axios from "axios";

const api = axios.create({
    baseURL: 'http://000.000.0.000:3333', // Your IP here.
});

export default api;