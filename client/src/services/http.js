const axios = require('axios')
const http = axios.create({
    baseURL: 'http://localhost:5000'
})

export default function () {
    return http
}