import axios from 'axios';
import handleResponse from 'src/utils/handleResponse';

const signin = (email, password) => {
  return axios({
    method: 'post',
    url: '/api/v1/auth/login',
    data: {
      email,
      password
    }
  })
    .then(handleResponse)
    .catch((error) => {
      console.log(error);
    })
    .then((result) => {
      if (!result) {
        return false;
      }
      localStorage.setItem('currentUser', JSON.stringify(result));
      return true;
    });
};

const LoginService = {
  signin
};

export default LoginService;
