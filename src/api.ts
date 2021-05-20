/**
 *
 * Copyright (c)    :  treibauf AG, Switzerland, 2020
 *
 */
import axios from 'axios';

const token = 'BQBD0ioeGelstbjJ5kGo51b4IzawiJB2WDAqYJsLfqHaX0hV5Z9SZ4bW0v6_hAXvdH82URixc27Nxg_26UuPsehTDanxOrWeimjZNt9tBrfYUgRFLFf1KWGY0HSOslwAZxWcQg49uWuozif2Lzl_P7b9zN24OoLJU8IdmFk_tHk1AGn8mlY1aBlrW6_0HAPdGXR_MU-nBdrPhRlFr6qrQls0TkP8Ygb0GJnkSS3wB6MajjNZVa0rlwzDi1RHm3AMGSRr2p01ZM6HvYYzbXL4x9yXtOm-P6-Mi2Jxuw';

/**
 * intercepts requests and adds the authorization header
 * @param {Store} store
 */
const setupRequestInterceptor = () => {
    axios.interceptors.request.use(
        reqConfig => {

            const newConfig = reqConfig;

            newConfig.headers.Authorization = `Bearer ${token}`;

            return newConfig;
        },
        // eslint-disable-next-line no-undef
        err => Promise.reject(err),
    );
};

/**
 * intercepts responses to update token and/or treat errors
 * @param {Store} store
 */
const setupResponseInterceptor = () => {
    axios.interceptors.response.use(response => {
        return response;
    }, error => {
        return Promise.reject(error);
    });
};

/**
 * sets up the necessary api configuration
 * @param {Store} store
 */
export const setupAPI = async () => {
    axios.create({ withCredentials: true });
    setupRequestInterceptor();
    setupResponseInterceptor();
};
