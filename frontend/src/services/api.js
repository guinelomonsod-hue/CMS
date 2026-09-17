import axios from "axios";

const api = axios.create({
    baseURL: "127.0.0.1:800/api",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

export default api;