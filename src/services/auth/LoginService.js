import axios from 'axios';
import handleResponseData from 'src/utils/handleResponseData';
import handleResponseError from 'src/utils/handleResponseError';

const signin = async (email, password) => {
  let result;
  try {
    const handleResponse = await axios({
      method: 'post',
      url: '/api/v1/auth/login',
      data: {
        email,
        password
      }
    });
    result = await handleResponseData(handleResponse);
  } catch (error) {
    result = handleResponseError(error);
  }
  return result;
};

const LoginService = {
  signin
};

export default LoginService;
