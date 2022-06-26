import axios from "axios";

const $host = axios.create({
    baseURL: 'http://localhost:7000/'
    // baseURL: process.env.REACT_APP_API_URL
})

export const fetchTable = async () => {
    const res = await $host.get('api/table/')
    return res.data
}
