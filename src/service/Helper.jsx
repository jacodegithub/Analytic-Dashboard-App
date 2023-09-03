import axios from 'axios'

export const BASE_URL = 'http://localhost:8080/dashboard/api/v1/'

export const RestAxios = axios.create({
    baseURL: BASE_URL
})

