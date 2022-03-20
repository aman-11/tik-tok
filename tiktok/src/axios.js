import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tiktoklasttry.herokuapp.com/"
});

export default instance;