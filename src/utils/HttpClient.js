import axios from 'axios';

const HttpClient = (config) => {
  const headerOptions = {
    'Content-type': 'application/json'
  };

  if (config) {
    if (config.useAccessToken) {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      headerOptions.Authorization = `Bearer ${currentUser.access_token}`;
    }
  }
  return axios.create({
    baseURL: 'https://vnideal.com',
    headers: headerOptions
  });
};

export default HttpClient;
