import axios from 'axios';
import handleResponseData from 'src/utils/handleResponseData';
import handleResponseError from 'src/utils/handleResponseError';

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

const LogoutService = {
  logout
};

export default LogoutService;
