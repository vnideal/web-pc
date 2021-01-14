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

const signup = async (firstName, lastName, displayName, email, password, passwordConfirm) => {
  let result;
  try {
    const handleResponse = await axios({
      method: 'post',
      url: '/api/v1/auth/signup',
      data: {
        first_name: firstName,
        last_name: lastName,
        name: displayName,
        email,
        password,
        password_confirmation: passwordConfirm,
        remember_me: 1
      }
    });
    result = await handleResponseData(handleResponse);
  } catch (error) {
    result = handleResponseError(error);
  }
  return result;
};

const AuthenticationService = {
  signin,
  signup,
  logout
};

export default AuthenticationService;
