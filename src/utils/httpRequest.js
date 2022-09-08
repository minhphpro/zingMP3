import axios from 'axios';

// const httpRequest = axios.create({
//     baseURL: process.env.REACT_APP_BASE_URL,
// });

// export const get = async (path, options = {}) => {
//     const response = await httpRequest.get(path, options);
//     return response.data;
// };

// export default httpRequest;

const request = axios.create({
    baseURL: `https://zing-mp3-api.vercel.app/api`,
});

request.interceptors.response.use(
    (res) => {
        return res.data;
    },
    function (error) {
        return Promise.reject(error);
    },
);

export default request;
