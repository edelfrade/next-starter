const axios = require('axios');
export const getServer = ({ url, timeout, rest }) => axios({  method: 'GET',  url,  timeout: timeout || 0,  proxy: { port: process.env.PORT || 3000 },  auth: { username: process.env.BASIC_USER, password: process.env.BASIC_PW },  ...rest,});
export const postServer = ({  url, timeout, data, rest,}) => axios({  method: 'POST',  url,  data,  timeout: timeout || 0,  proxy: { port: process.env.PORT || 3000 },  auth: { username: process.env.BASIC_USER, password: process.env.BASIC_PW },  ...rest,});
export const putServer = ({  url, timeout, data, rest,}) => axios({  method: 'PUT',  url,  data,  timeout: timeout || 0,  proxy: { port: process.env.PORT || 3000 },  auth: { username: process.env.BASIC_USER, password: process.env.BASIC_PW },  ...rest,});
export const get = ({ url, timeout, rest }) => axios({  method: 'GET', url, timeout: timeout || 0, ...rest,});
export const post = ({  url, timeout, data, rest,}) => axios({  method: 'POST', url, data, timeout: timeout || 0, ...rest,});
export const put = ({  url, timeout, data, rest,}) => axios({  method: 'PUT', url, data, timeout: timeout || 0, ...rest,});