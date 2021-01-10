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

const logout = async () => {
  let responseData;

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (!currentUser) {
    return false;
  }
  axios.defaults.headers.common = { Authorization: `Bearer ${currentUser.access_token}` };

  try {
    const handleResponse = await axios({
      method: 'get',
      url: '/api/v1/logout'
    });
    responseData = await handleResponseData(handleResponse);
  } catch (error) {
    responseData = handleResponseError(error);
  }

  localStorage.removeItem('currentUser');

  const { result } = responseData;

  return result;
};

const AuthenticationService = {
  signin,
  logout
};

export default AuthenticationService;
