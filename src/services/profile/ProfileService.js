import axios from 'axios';
import handleResponseData from 'src/utils/handleResponseData';
import handleResponseError from 'src/utils/handleResponseError';
import AuthenticationService from 'src/services/auth/AuthenticationService';

const info = async () => {
  let responseData;

  AuthenticationService.useAccessToken();

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

const update = async (firstName, lastName, displayName, phone, country, state) => {
  let result;
  AuthenticationService.useAccessToken();

  try {
    const handleResponse = await axios({
      method: 'post',
      url: '/api/v1/profile/update',
      data: {
        first_name: firstName,
        last_name: lastName,
        name: displayName,
        phone,
        country,
        state,
        _method: 'put'
      }
    });
    result = await handleResponseData(handleResponse);
  } catch (error) {
    result = handleResponseError(error);
  }
  return result;
};

const ProfileService = {
  info,
  update
};

export default ProfileService;
