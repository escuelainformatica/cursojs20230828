import axios from 'axios';
export default {
    listarAsync: function () {
        return axios.request({
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://jsonplaceholder.typicode.com/users',
            headers: {}
        });
    }
}