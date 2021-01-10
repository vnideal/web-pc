import axios from 'axios';
import handleResponseData from 'src/utils/handleResponseData';
import handleResponseError from 'src/utils/handleResponseError';

const info = async () => {
  let responseData;

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (!currentUser) {
    return {
      avatar: '/static/images/avatars/non-login.png',
      name: 'Guest User'
    };
  }
  axios.defaults.headers.common = { Authorization: `Bearer ${currentUser.access_token}` };

  try {
    const handleResponse = await axios({
      method: 'get',
      url: '/api/v1/profile'
    });
    responseData = await handleResponseData(handleResponse);
  } catch (error) {
    responseData = handleResponseError(error);
  }
  const { result } = responseData;

  return result;
};

const ProfileService = {
  info
};

export default ProfileService;
