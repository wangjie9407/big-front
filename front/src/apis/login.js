import axios from 'axios';

export function getCaptcha(){
    return axios.get('/api/getCaptcha')
}