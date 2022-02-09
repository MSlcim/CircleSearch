import axios from 'axios';
import { response } from 'express';

import {
    LOGIN_USER,
    REGISTER_USER1,
    AUTH_USER
} from './types';

export function loginUser(DataToSubmit) {

    const request = axios.post('/api/user/login', dataToSubmit)
    .then(response => response.data)

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function registerUser1(DataToSubmit) {
    const request = axios.post('/api/user/register1',DataToSubmit)
    .then(response => response.data)

    return {
        type: REGISTER1_USER,
        payload: request
    }
}