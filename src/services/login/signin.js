import axios from 'axios';

const signin = (email, password) => {
  return axios({
    method: 'post',
    url: '/api/v1/auth/login',
    data: {
      email,
      password
    }
  });
};
export default signin;
