import HttpClient from 'src/utils/HttpClient';
import handleResponseData from 'src/utils/handleResponseData';
import handleResponseError from 'src/utils/handleResponseError';

const httpClientOptions = { useAccessToken: false };

const listed = async ({ query, page }) => {
  let responseData;

  try {
    const httpClient = HttpClient(httpClientOptions);
    const handleResponse = await httpClient.get('/api/v1/products/listed', {
      params: {
        q: query,
        page
      }
    });
    responseData = await handleResponseData(handleResponse);
  } catch (error) {
    responseData = handleResponseError(error);
  }
  const { result } = responseData;

  return result;
};

const detail = async ({ id }) => {
  let responseData;

  try {
    const httpClient = HttpClient(httpClientOptions);
    const handleResponse = await httpClient.get(`/api/v1/products/listed/${id}`);
    responseData = await handleResponseData(handleResponse);
  } catch (error) {
    responseData = handleResponseError(error);
  }
  const { result } = responseData;

  return result;
};

const myProducts = async () => {
  let responseData;

  try {
    httpClientOptions.useAccessToken = true;
    const httpClient = HttpClient(httpClientOptions);
    const handleResponse = await httpClient.get('/api/v1/products');
    responseData = await handleResponseData(handleResponse);
  } catch (error) {
    responseData = handleResponseError(error);
  }
  const { result } = responseData;

  return result;
};

const ProductService = {
  listed,
  detail,
  myProducts
};

export default ProductService;
