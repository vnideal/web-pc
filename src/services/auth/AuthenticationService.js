import HttpClient from 'src/utils/HttpClient';
import handleResponseData from 'src/utils/handleResponseData';
import handleResponseError from 'src/utils/handleResponseError';

const httpClientOptions = { useAccessToken: true };

const signin = async (email, password) => {
  let result;
  try {
    const httpClient = HttpClient({ useAccessToken: false });
    const handleResponse = await httpClient.post('/api/v1/auth/login', {
      email,
      password
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

  try {
    const httpClient = HttpClient(httpClientOptions);
    const handleResponse = await httpClient.get('/api/v1/logout');
    responseData = await handleResponseData(handleResponse);
  } catch (error) {
    responseData = handleResponseError(error);
  }

  localStorage.removeItem('currentUser');

  const { result } = responseData;

  return result;
};

const signup = async (firstName, lastName, displayName, email, password, confirmPassword) => {
  let result;
  try {
    httpClientOptions.useAccessToken = false;
    const httpClient = HttpClient(httpClientOptions);
    const handleResponse = await httpClient.post('/api/v1/auth/signup', {
      first_name: firstName,
      last_name: lastName,
      name: displayName,
      email,
      password,
      password_confirmation: confirmPassword,
      remember_me: 1
    });
    result = await handleResponseData(handleResponse);
  } catch (error) {
    result = handleResponseError(error);
  }
  return result;
};

const isLogin = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  return !!currentUser;
};

const AuthenticationService = {
  signin,
  signup,
  logout,
  isLogin
};

export default AuthenticationService;
