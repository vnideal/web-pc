const formatResponseError = (responseData) => {
  const { errors } = responseData;
  Object.entries(errors).forEach(([key, value]) => {
    errors[key] = value.join('<br>');
  });

  return responseData;
};

export default (error) => {
  return formatResponseError(error.response.data);
};
