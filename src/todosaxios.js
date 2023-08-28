import axios from 'axios';
export default {
    listarAsync: function () {
        return axios.request({
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://jsonplaceholder.typicode.com/todos',
            headers: {}
        });
    },
    insertarAsync:(todo) => {
        return axios.request({
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://jsonplaceholder.typicode.com/todos',
            headers: {
                'Content-Type': 'application/json'
            },
            data: todo
        });
    }
}