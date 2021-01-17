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
      _method: 'PUT'
    });
    result = await handleResponseData(handleResponse);
  } catch (error) {
    result = handleResponseError(error);
  }
  return result;
};

const uploadAvatar = async (file, onUploadProgress) => {
  let responseData;

  try {
    const httpClient = HttpClient(httpClientOptions);
    const formData = new FormData();

    formData.append('avatar', file);
    formData.append('_method', 'PUT');
    const handleResponse = await httpClient.post('/api/v1/profile/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress
    });
    responseData = await handleResponseData(handleResponse);
  } catch (error) {
    responseData = handleResponseError(error);
  }

  const { result } = responseData;

  return result;
};

const updatePassword = async (currentPassword, newPassword, confirmNewPassword) => {
  let responseData;

  try {
    const httpClient = HttpClient(httpClientOptions);
    const handleResponse = await httpClient.post('/api/v1/profile/password', {
      password: currentPassword,
      new_password: newPassword,
      new_password_confirmation: confirmNewPassword,
      _method: 'PUT'
    });
    responseData = await handleResponseData(handleResponse);
  } catch (error) {
    responseData = handleResponseError(error);
  }
  return responseData;
};

const ProfileService = {
  info,
  update,
  uploadAvatar,
  updatePassword
};

export default ProfileService;
