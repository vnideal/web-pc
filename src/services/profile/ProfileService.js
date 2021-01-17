import HttpClient from 'src/utils/HttpClient';
import handleResponseData from 'src/utils/handleResponseData';
import handleResponseError from 'src/utils/handleResponseError';

const httpClientOptions = { useAccessToken: true };

const info = async () => {
  let responseData;

  try {
    const httpClient = HttpClient(httpClientOptions);
    const handleResponse = await httpClient.get('/api/v1/profile');
    responseData = await handleResponseData(handleResponse);
  } catch (error) {
    responseData = handleResponseError(error);
  }
  const { result } = responseData;

  return result;
};

const update = async (firstName, lastName, displayName, phone, country, state) => {
  let result;

  try {
    const httpClient = HttpClient(httpClientOptions);
    const handleResponse = await httpClient.post('/api/v1/profile/update', {
      first_name: firstName,
      last_name: lastName,
      name: displayName,
      phone,
      country,
      state,
      _method: 'put'
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
